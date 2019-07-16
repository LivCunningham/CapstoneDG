import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BarFeedItem from '../components/BarFeedItem.jsx'
import './TheOne.scss'

export default function TheOne(props) {
  const [result, setResults] = useState([])
  const [been, setBeen] = useState([])

  useEffect(() => {
    let placeID = props.match.params.id
    console.log({ placeID })
    axios
      .get(`https://localhost:5001/api/Bars/individual/${placeID}`)
      .then(resp => {
        console.log({ resp })
        setResults(resp.data)
      })
  }, [])

  const updateVisited = () => {
    console.log()
    axios.patch(`https://localhost:5001/api/Bars/Visited/`).then(resp => {
      console.log({ resp })
      setResults(resp.data)
    })
  }

  return (
    <div>
      <div class="card">
        <div class="card-body">
          <button
            type="radio"
            name="stuff"
            value="stuff"
            className="button"
            onClick={() => updateVisited()}
          />
          <h5 class="card-title">{result.name}</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
        <img class="card-img-bottom" src={result.photo} alt="Card image cap" />
      </div>
    </div>
  )
}
