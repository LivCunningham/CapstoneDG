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
                  <Button>Let's Go!</Button>
                </CardBody>
              </li>
            )
          })}
        </ul>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This card has supporting text below as a natural lead-in to
            additional content.
          </CardText>
          <Button>Let's Go!</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </CardText>
          <Button>Let's Go!</Button>
        </CardBody>
      </Card>
    </CardDeck>
  )
}
