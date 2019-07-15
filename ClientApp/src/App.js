import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import Home from './Pages/Home.jsx'
import NewDate from './Pages/NewDate.jsx'
import Login from './Pages/Login.jsx'
import Registration from './Pages/Registration.jsx'
import Results from './Pages/Results.jsx'
import TheOne from './Pages/TheOne.jsx'
import Adventures from './Pages/Adventures.jsx'
import FavoritePlaces from './Pages/FavoritePlaces.jsx'
import Admin from './Pages/Admin.jsx'
import auth from './components/auth'
import axios from 'axios'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Admin" component={Admin} />
        <Route component={Registration} />
        <Route exact path="/NewDate" component={NewDate} />
        {/* <Route path="/Results/:city" exact component={Results} /> */}
        <Route exact path="/Results" component={Results} />
        <Route exact path="/TheOne" component={TheOne} />
        <Route exact Path="/Adventures" component={Adventures} />
        <Route exact Path="/FavoritePlaces" component={FavoritePlaces} />
        <Route path="/login" render={() => auth.login()} />
        <Route
          path="/logout"
          render={() => {
            auth.logout()
            return <p />
          }}
        />
        <Route
          path="/callback"
          render={() => {
            auth.handleAuthentication(() => {
              // NOTE: Uncomment the following lines if you are using axios
              //
              // Set the axios authentication headers
              axios.defaults.headers.common = {
                Authorization: auth.authorizationHeader()
              }
            })
            return <p />
          }}
        />
      </Layout>
    )
  }
}
