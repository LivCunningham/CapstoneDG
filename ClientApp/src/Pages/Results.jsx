import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Results.css'
import { Link } from 'react-router-dom'
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from 'reactstrap'

export default function Results(props) {
  const selectedCity = props.match.params.city
  console.log({ selectedCity })
  const [bars, setBars] = useState([])
  const [restaurants, setRestaurants] = useState([])
  const [entertainment, setEntertainment] = useState([])

  //Bars
  useEffect(() => {
    axios.get(`https://localhost:5001/api/Bars`).then(resp => {
      setBars(resp.data)
      console.log({ resp })

      // this.setState({
      //   setID: resp.data.id
      // })
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
    <CardDeck>
      <Card>
        <ul className="Bars">
          {bars.map(index => {
            return (
              <li key={index}>
                <CardImg
                  top
                  width="100%"
                  src={index.photo}
                  alt="Card image cap"
                />
                <CardBody>
                  <Link to={`/TheOne/${index.id}`}>
                    <CardTitle>{index.name}</CardTitle>
                  </Link>
                  <CardSubtitle>{index.type}</CardSubtitle>
                  <CardText>{index.location.replace('<br/>', '')}</CardText>
                  <Link to={`/TheOne/${index.id}`}>
                    <Button>Let's Go!</Button>{' '}
                  </Link>
                </CardBody>
              </li>
            )
          })}
        </ul>
      </Card>
      <Card>
        <ul className="Bars">
          {bars.map(index => {
            return (
              <li key={index}>
                <CardImg
                  top
                  width="100%"
                  src={index.photo}
                  alt="Card image cap"
                />
                <CardBody>
                  <Link to={`/TheOne/${index.id}`}>
                    <CardTitle>{index.name}</CardTitle>
                  </Link>
                  <CardSubtitle>{index.type}</CardSubtitle>
                  <CardText>{index.location.replace('<br/>', '')}</CardText>
                  <Link to={`/TheOne/${index.id}`}>
                    <Button>Let's Go!</Button>{' '}
                  </Link>
                </CardBody>
              </li>
            )
          })}
        </ul>
      </Card>
      <Card>
        <ul className="Bars">
          {bars.map(index => {
            return (
              <li key={index}>
                <CardImg
                  top
                  width="100%"
                  src={index.photo}
                  alt="Card image cap"
                />
                <CardBody>
                  <Link to={`/TheOne/${index.id}`}>
                    <CardTitle>{index.name}</CardTitle>
                  </Link>
                  <CardSubtitle>{index.type}</CardSubtitle>
                  <CardText>{index.location.replace('<br/>', '')}</CardText>
                  <Link to={`/TheOne/${index.id}`}>
                    <Button>Let's Go!</Button>{' '}
                  </Link>
                </CardBody>
              </li>
            )
          })}
        </ul>
      </Card>
    </CardDeck>
  )
}
