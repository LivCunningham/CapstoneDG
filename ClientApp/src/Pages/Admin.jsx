import React, { Component } from 'react'
import AddressSuggest from '../components/AddressSuggest.jsx'
import AddressInput from '../components/AddressInput.jsx'
import axios from 'axios'
import './Admin.css'
// import auth from '../components/auth'

// const thePlace = 'going-out'
const APP_ID_HERE = 'AMsXJCY7VtRdqUqhD4Nr'
const APP_CODE_HERE = 'bAfnOReqDXdAlzKbbz6mCA'
// const API_URL = https://places.cit.api.here.com/places/v1/discover/search?q=${thePlace}&app_id=AMsXJCY7VtRdqUqhD4Nr&app_code=bAfnOReqDXdAlzKbbz6mCA&at=${
//   this.state.coords.lat
// },${this.state.coords.lon}

class Admin extends Component {
  constructor(props) {
    super(props)

    this.state = this.getInitialState()

    // Admin has entered something in the address bar
    this.onQuery = this.onQuery.bind(this)
    // Admin has entered something in an address field
    this.onAddressChange = this.onAddressChange.bind(this)
    // Admin has clicked the check button

    // Admin has clicked the clear button
    this.onClear = this.onClear.bind(this)
  }

  // componentWillMount() {
  //   if (auth.isAuthenticated()) {
  //     axios.defaults.headers.common = {
  //       Authorization: auth.authorizationHeader()
  //     }
  //   }
  // }

  onQuery(evt) {
    const query = evt.target.value

    if (!query.length > 0) {
      this.setState(this.getInitialState())
      return
    }
    //AUTOCOMPLETE
    const self = this
    axios
      .get('https://autocomplete.geocoder.api.here.com/6.2/suggest.json', {
        params: {
          app_id: APP_ID_HERE,
          app_code: APP_CODE_HERE,
          query: query,
          maxresults: 1
        }
      })
      .then(function(response) {
        if (response.data.suggestions.length > 0) {
          const id = response.data.suggestions[0].locationId
          const address = response.data.suggestions[0].address
          self.setState({
            address: address,
            query: query,
            locationId: id
          })
        } else {
          const state = self.getInitialState()
          self.setState(state)
        }
      })
  }

  getInitialState() {
    return {
      results: [],
      vicinity: '',
      openingHours: '',
      isOpen: '',
      text: '',

      name: '',
      address: {
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: ''
      },
      query: '',
      locationId: '',
      isChecked: false,
      coords: {}
    }
  }

  onClear = evt => {
    const state = this.getInitialState()
    this.setState(state)
  }

  onAddressChange = evt => {
    const id = evt.target.id
    const val = evt.target.value

    let state = this.state
    state.address[id] = val
    this.setState(state)
  }

  onCheck = evt => {
    let params = {
      app_id: APP_ID_HERE,
      app_code: APP_CODE_HERE
    }

    if (this.state.locationId.length > 0) {
      params['locationId'] = this.state.locationId
    } else {
      params['searchtext'] =
        this.state.address.street +
        this.state.address.city +
        this.state.address.state +
        this.state.address.postalCode +
        this.state.address.country
    }

    //GEOCODER
    axios
      .get('https://geocoder.api.here.com/6.2/geocode.json', { params: params })
      .then(response => {
        const view = response.data.Response.View
        if (view.length > 0 && view[0].Result.length > 0) {
          const location = view[0].Result[0].Location

          this.setState(
            {
              isChecked: 'true',
              locationId: '',
              query: location.Address.Label,
              address: {
                street:
                  location.Address.HouseNumber + ' ' + location.Address.Street,
                city: location.Address.City,
                state: location.Address.State,
                postalCode: location.Address.PostalCode,
                country: location.Address.Country
              },
              coords: {
                lat: location.DisplayPosition.Latitude,
                lon: location.DisplayPosition.Longitude
              }
            },
            () => {
              axios
                .get(
                  `https://places.cit.api.here.com/places/v1/discover/search?q='going-out'&app_id=AMsXJCY7VtRdqUqhD4Nr&app_code=bAfnOReqDXdAlzKbbz6mCA&at=${
                    this.state.coords.lat
                  },${this.state.coords.lon}`
                )
                .then(resp => {
                  console.log('ran')
                  console.log({ resp })
                  this.setState({
                    results: resp.data.results.items
                  })
                })
            }
          )
        } else {
          this.setState({
            isChecked: true,
            coords: null
          })
        }
      })
      .catch(error => {
        console.log('caught failed query')
        this.setState({
          isChecked: true,
          coords: null
        })
      })
  }

  alert() {
    if (!this.state.isChecked) {
      return
    }

    if (this.state.coords === null) {
      return (
        <div className="alert alert-warning" role="alert">
          <b>Invalid.</b> The address is not recognized.
        </div>
      )
    } else {
      return (
        <div className="alert alert-success" role="alert">
          <b>Valid Address.</b> Location is {this.state.coords.lat},{' '}
          {this.state.coords.lon}.
        </div>
      )
    }
  }

  // sanitizeType = location => {
  //   let incorrectBarTypes = ['bar-pub'];
  //   let incorrectRestaurantTypes = ['cuisines.burger'];
  //   let incorrectGoingOutTypes = ['im not sure'];

  //   if(location.catego)
  // }
  // postData = location => {

  //   this.sanitizeType(location);
  postData = location => {
    axios
      .post('https://localhost:5001/api/Bars', {
        name: location.title,
        address: location.vicinity,
        Type: location.category.id,
        isOpen: location.openingHours.isOpen,
        Time: location.openingHours.text,
        Photo: location.photo
      })
      .then(resp => {
        console.log({ resp })
      })
  }

  //Bars
  getData = location => {
    axios
      .get('https://localhost:5001/api/Bars', {
        name: location.title,
        address: location.vicinity,
        Type: location.category.id,
        isOpen: location.openingHours.isOpen,
        Time: location.openingHours.text,
        Photo: location.photo
      })
      .then(resp => {
        console.log({ resp })
      })
  }

  // //Restaurants
  // getRestaurants = location => {
  //   axios
  //     .get('https://localhost:5001/api/Restaurants', {
  //       name: location.title,
  //       address: location.vicinity,
  //       Type: location.category.id,
  //       isOpen: location.openingHours.isOpen,
  //       Time: location.openingHours.text,
  //       Photo: location.photo
  //     })
  //     .then(resp => {
  //       console.log({ resp })
  //     })
  // }

  deleteData = () => {
    axios.delete('https://localhost:5001/api/Bars/deleteall').then(resp => {
      console.log({ resp })
      this.setState({})
    })
  }

  render() {
    let outcome = this.alert()
    return (
      <div className="stuff-container">
        <AddressSuggest query={this.state.query} onChange={this.onQuery} />
        <AddressInput
          city={this.state.address.city}
          state={this.state.address.state}
          postalCode={this.state.address.postalCode}
          country={this.state.address.country}
          onChange={this.onAddressChange}
        />
        <br />
        {outcome}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onCheck}
        >
          Check
        </button>
        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={this.onClear}
        >
          Clear
        </button>
        <button className="btn btn-outline-secondary" onClick={this.deleteData}>
          Delete
        </button>
        <section className="grid">
          <ul className="results">
            {this.state.results.map(location => {
              console.log(location)

              return (
                <li key={location.id}>
                  <button
                    onClick={() => {
                      this.postData(location)
                    }}
                    className="yes-way"
                  >
                    +
                  </button>
                  <p>{location.title}</p>
                  <span>{location.category.id}</span>
                  <p>{location.vicinity.split('<br/>')}</p>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    )
  }
}

export default Admin
