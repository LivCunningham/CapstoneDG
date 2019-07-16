import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Home.scss'

export default function Home(props) {
  const beenThere = props.match.params.visited
  console.log({ beenThere })
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get(`https://localhost:5001/api/Bars/visited/`).then(resp => {
      console.log({ resp })
      console.log(resp.data)
      setList(resp.data[0])
    })
  }, [])

  var scrollW = document.getElementById('wrap-scroll')
  var scrollUl = document.getElementById('ul-scroll')
  var itemsScrolled,
    itemsMax,
    cloned = false

  var listOpts = {
    itemCount: null,
    itemHeight: null,
    items: []
  }

  function scrollWrap() {
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
        var node = listOpts.items[x]

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

  function initItems(scrollSmooth) {
    listOpts.items = [].slice.call(scrollUl.querySelectorAll('li'))
    listOpts.itemHeight = listOpts.items[0].clientHeight
    listOpts.itemCount = listOpts.items.length

    if (!itemsMax) {
      itemsMax = listOpts.itemCount
    }

    if (scrollSmooth) {
      var seamLessScrollPoint = (itemsMax - 3) * listOpts.itemHeight
      scrollW.scrollTop = seamLessScrollPoint
    }
  }

  return (
    <div>
      <div id="scroll-container">
        <div class="wrap-container" id="wrap-scroll">
          <ul id="ul-scroll">
            <li class="active">
              <span class="item">{list.name}</span>
            </li>
            <li>
              <span class="item">Item two</span>
            </li>
            <li>
              <span class="item">Item three</span>
            </li>
            <li>
              <span class="item">Item four</span>
            </li>
            <li>
              <span class="item">Item five</span>
            </li>
            <li>
              <span class="item">Item six</span>
            </li>
            <li>
              <span class="item">Item seven</span>
            </li>
            <li>
              <span class="item">Item eight</span>
            </li>
            <li>
              <span class="item">Item nine</span>
            </li>
            <li>
              <span class="item">Item ten</span>
            </li>
            <li>
              <span class="item">Item eleven</span>
            </li>
          </ul>
        </div>
      </div>
      <svg>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0%" x2="0" y2="50%">
            <stop stop-color="black" offset="0" />
            <stop stop-color="white" offset="1" />
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
