// import React from 'react'
import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import './NewDate.scss'
import { Link } from 'react-router-dom'

// //API
// //Beginning with Geolocation
// const getLocation = e => {
//   e.preventDefault()
//   axios
//     .get(
//       'https://places.demo.api.here.com/places/v1/discover/explore?app_id=AMsXJCY7VtRdqUqhD4Nr&app_code=bAfnOReqDXdAlzKbbz6mCA'
//     )
//     .then(resp => {
//       console.log({ resp })
//       .get(
//       ''
//       )
//     })
// }

export default function NewDate() {
  return (
    <div className="check-background">
      <section className="categories">
        <label class="container">
          <span class="checkmark" />
          <input className="checkbox" type="checkbox" />
          <p>Bar</p>
        </label>
        <label class="container">
          <span class="checkmark" />
          <input className="checkbox" type="checkbox" />
          <p>Restaurant</p>
        </label>

        <label class="container">
          <span class="checkmark" />
          <input className="checkbox" type="checkbox" />
          <p>Entertainment</p>
        </label>
      </section>
      <section className="Money">
        <label class="container">
          <span class="checkmark" />
          <input className="checkbox" type="checkbox" />
          <p>$</p>
        </label>
        <label class="container">
          <span class="checkmark" />
          <input className="checkbox" type="checkbox" />
          <p>$$</p>
        </label>
        <label class="container">
          <span class="checkmark" />
          <input className="checkbox" type="checkbox" />
          <p>$$$</p>
        </label>
      </section>
      <section className="Time">
        <label class="container">
          <span class="checkmark" />
          <input className="checkbox" type="checkbox" />
          <p>Morning</p>
        </label>
        <label class="container">
          <span class="checkmark" />
          <input className="checkbox" type="checkbox" />
          <p>Brunch</p>
        </label>
        <label class="container">
          <span class="checkmark" />
          <input className="checkbox" type="checkbox" />
          <p>Evening</p>
        </label>
      </section>
      <section className="Extra">
        <label class="container">
          <span class="checkmark" />
          <input className="checkbox" type="checkbox" />
          <p>Dive-Bar</p>
        </label>
        <label class="container">
          <span class="checkmark" />
          <input className="checkbox" type="checkbox" />
          <p>casual</p>
        </label>
        <label class="container">
          <span class="checkmark" />
          <input className="checkbox" type="checkbox" />
          <p>Semi-Formal</p>
        </label>
        <label class="container">
          <span class="checkmark" />
          <input className="checkbox" type="checkbox" />
          <p>Formal</p>
        </label>
      </section>
      <section className="Environment">
        <label class="container">
          <span class="checkmark" />
          <input className="checkbox" type="checkbox" />
          <p>Smoking</p>
        </label>
        <label class="container">
          <span class="checkmark" />
          <input className="checkbox" type="checkbox" />
          <p>Non-Smoking</p>
        </label>
        <label class="container">
          <span class="checkmark" />
          <input className="checkbox" type="checkbox" />
          <p>Dance Floor</p>
        </label>
      </section>
      <Link className="link-results" to="/Results">
        <button className="Random-Button" class="btn draw-border">
          TOTALLY RANDOM ADVENTURE
        </button>
      </Link>
    </div>
  )
}
