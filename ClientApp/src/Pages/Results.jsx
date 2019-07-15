import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Results.css'

export default function Results() {
  const [bars, setBars] = useState([])
  const [restaurants, setRestaurants] = useState([])
  const [entertainment, setEntertainment] = useState([])

  //Bars
  useEffect(() => {
    axios.get(`https://localhost:5001/api/Bars`).then(resp => {
      console.log({ resp })
      setBars(resp.data)
    })
  }, [])

  //Restaurants
  useEffect(() => {
    axios
      .get(`https://localhost:5001/api/Restaurants/restaurant`)
      .then(resp => {
        console.log({ resp })
        setRestaurants(resp.data)
      })
  }, [])

  //Entertainment
  useEffect(() => {
    axios
      .get(`https://localhost:5001/api/Entertainment/entertainment`)
      .then(resp => {
        console.log({ resp })
        setEntertainment(resp.data)
      })
  }, [])

  return (
    <section>
      <div className="bar-selection">
        <ul className="Bars">
          {bars.map(index => {
            return (
              <li key={index}>
                <h4>{index.name}</h4>
                <h4>{index.location.replace('<br/>', '')}</h4>
                <div class="things-container">
                  <img className="image" src={index.photo} alt="" />
                  <div class="middle">
                    <div class="text">See More Photos</div>
                  </div>
                </div>
              </li>
              // split('<br/>')
            )
          })}
        </ul>
      </div>
      <div className="restaurant-selection">
        <ul className="restaurants">
          {restaurants.map(index => {
            return (
              <li key={index}>
                <h4>{index.name}</h4>
                <h4>{index.location}</h4>
                <div class="things-container">
                  <img className="image" src={index.photo} alt="stuff" />
                  <div class="middle">
                    <div class="text">See More Photos</div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="entertainment-selection">
        <ul className="entertainment">
          {entertainment.map(index => {
            return (
              <li key={index}>
                <h4>{index.name}</h4>
                <h4>{index.location}</h4>
                <div class="things-container">
                  <img className="image" src={index.photo} alt="stuff" />
                  <div class="middle">
                    <div class="text">See More Photos</div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
