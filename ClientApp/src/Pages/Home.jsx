import React, { Component } from 'react'
import './Home.scss'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="welcome-back">
          <div class="user-profile">
            <img
              class="avatar"
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF_erFD1SeUnxEpvFjzBCCDxLvf-wlh9ZuPMqi02qGnyyBtPWdE-3KoH3s"
              alt="Ash"
            />

            <div class="username">User Name</div>
            <div class="bio">Dating Status</div>
            <div class="description">
              Welcome Back!
              <br />
              What's on the agenda for today?
            </div>
            <ul className="date-time" class="data">
              <li>
                <span class="entypo-heart"> FRIDAY</span>
              </li>
              <li>
                <span class="entypo-heart"> JULY</span>
              </li>
              <li>
                <span class="entypo-eye"> 12TH</span>
              </li>
              <li>
                <span class="entypo-user"> 2019</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="dashboard" class="dash-container">
          <div class="panel post">
            <a href="javascript:void();">
              <span>8 </span>Favorites
            </a>
          </div>
          <div class="panel comment">
            <a href="javascript:void();">
              <span>39 </span>Dates
            </a>
          </div>
          <div class="panel page">
            <a href="javascript:void();">
              <span>5 </span>Upcoming
            </a>
          </div>
          <div class="panel user">
            <a href="javascript:void();">
              <span>4 </span>Friends
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
