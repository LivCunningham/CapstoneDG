import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Home.scss'
import { Link } from 'react-router-dom'
import NewDate from './NewDate.jsx'

export default function Home(props) {
  const beenThere = props.match.params.visited
  console.log({ beenThere })
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get(`https://localhost:5001/api/Bars/visited/`).then(resp => {
      setList(resp.data)
      console.log({ resp })
    })
  }, [])

  let scrollW = document.getElementById('wrap-scroll')
  let scrollUl = document.getElementById('ul-scroll')
  let itemsScrolled,
    itemsMax,
    cloned = false

  const listOpts = {
    itemCount: null,
    itemHeight: null,
    items: []
  }

  const scrollWrap = () => {
    itemsScrolled = Math.ceil(
      (this.scrollTop + listOpts.itemHeight / 2) / listOpts.itemHeight
    )

    if (this.scrollTop < 1) {
      itemsScrolled = 0
    }

    listOpts.items.forEach(function(ele) {
      ele.classList.remove('active')
    })

    if (itemsScrolled < listOpts.items.length) {
      listOpts.items[itemsScrolled].classList.add('active')
    }

    if (itemsScrolled > listOpts.items.length - 3) {
      for (let x = 0; x <= itemsMax - 1; x++) {
        let node = listOpts.items[x]

        if (!cloned) {
          node = listOpts.items[x].cloneNode(true)
        }

        scrollUl.appendChild(node)
      }

      initItems(cloned)
      cloned = true
      itemsScrolled = 0
    }
  }

  const initItems = scrollSmooth => {
    listOpts.items = [].slice.call('li')
    listOpts.itemHeight = listOpts.items[0].clientHeight
    listOpts.itemCount = listOpts.items.length

    if (!itemsMax) {
      itemsMax = listOpts.itemCount
    }

    if (scrollSmooth) {
      const seamLessScrollPoint = (itemsMax - 3) * listOpts.itemHeight
      scrollW.scrollTop = seamLessScrollPoint
    }

    initItems()
    scrollW.onscroll = scrollWrap
  }

  return (
    <div>
      <div className="home">
        <ul className="homepage-container">
          <li className="things">
            <h1>
              <span className="discover">DISCOVER</span>
              <span className="new">
                {' '}
                NEW PLACES,
                <br />
              </span>
              <span className="venue">
                EVENTS & VENUES <br />
              </span>
              <span className="home">IN YOUR NECK OF THE WOODS</span>
            </h1>
            <span />
          </li>
          <li className="things" />
        </ul>
      </div>
      <NewDate />
    </div>
  )
}
