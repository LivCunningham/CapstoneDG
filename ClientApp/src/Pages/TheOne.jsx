import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BarFeedItem from '../components/BarFeedItem.jsx'

export default function TheOne(props) {
  const [result, setResults] = useState([])

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

  return (
    <div>
      <h1>{result.name}</h1>
    </div>
  )
}
