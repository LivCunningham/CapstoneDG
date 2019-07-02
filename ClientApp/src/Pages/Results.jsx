import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Results() {
  const [bars, setBars] = useState([])

  //Bars
  useEffect(() => {
    axios.get(`https://localhost:5001/api/Bars/bar`).then(resp => {
      console.log({ resp })
      setBars(resp.data)
    })
  }, [])

  return (
    <section>
      <div className="bar-selection">
        <ul>
          {bars.map(index => {
            return (
              <li key={index}>
                <h2>{index.Name}</h2>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
