import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Visited.scss'
import { Link } from 'react-router-dom'

export default function Visited(props) {
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
    <div className="visited">
      <div class="scroll-container">
        <div className="this-is-stuff">
          <h1 className="sideways">Recent Adventures</h1>
          <div class="wrap-container" id="wrap-scroll">
            <ul id="ul-scroll" className="Been">
              {list.map(soup => {
                return (
                  <li key={soup}>
                    <li class="active">
                      <Link to={`/TheOne/${soup.name}`}>
                        <span className="beento">{soup.name}</span>
                      </Link>
                    </li>
                    <li>
                      <span class="item">{soup.name}</span>
                    </li>
                    <li>
                      <span class="item">{soup.name}</span>
                    </li>
                    <li>
                      <span class="item">{soup.name}</span>
                    </li>
                    <li>
                      <span class="item">{soup.name}</span>
                    </li>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <svg>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0%" x2="0" y2="50%">
            <stop stopColor="black" offset="0" />
            <stop stopColor="white" offset="1" />
          </linearGradient>

          <mask
            id="masking"
            maskUnits="objectBoundingBox"
            maskContentUnits="objectBoundingBox"
          >
            <rect y="0" width="1" height="1" fill="url(#gradient)" />
          </mask>
        </defs>
      </svg>
    </div>
  )
}
