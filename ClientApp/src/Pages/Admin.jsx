import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Admin() {
  const [Location, setLocation] = useState('')

  //API
  //Beginning with Geolocation
  const getLocation = e => {
    e.preventDefault()
    axios
      .get(
        'https://places.demo.api.here.com/places/v1/discover/explore?app_id=AMsXJCY7VtRdqUqhD4Nr&app_code=bAfnOReqDXdAlzKbbz6mCA'
      )
      .then(resp => {
        console.log({ resp }).get('')
      })
  }

  return <div />
}
