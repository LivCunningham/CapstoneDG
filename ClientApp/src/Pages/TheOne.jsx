import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BarFeedItem from '../components/BarFeedItem.jsx'
import './TheOne.scss'
import { Button } from 'reactstrap'

export default function TheOne(props) {
  const [result, setResults] = useState([])
  const [been, setBeen] = useState([])

  const placeID = props.match.params.id
  useEffect(() => {
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
    axios
      .patch(`https://localhost:5001/api/Bars/Visited/${placeID}`)
      .then(resp => {
        console.log({ resp })
        setResults(resp.data)
      })
  }

  return (
    <div>
      <div class="card">
        <div class="card-body">
          <Button
            color="success"
            className="been-button"
            type="radio"
            name="stuff"
            value="stuff"
            onClick={() => updateVisited()}
          >
            Have you been here before?
          </Button>
          <h1 className="card-one-title">{result.name}</h1>
          <h3 class="card-title">{result.location}</h3>
          <h3 class="card-title">{result.type}</h3>
          <h3 class="card-title">{result.time}</h3>

          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
        <img class="card-img-bottom" src={result.photo} alt="Card image cap" />
      </div>
    </div>
  )
}
