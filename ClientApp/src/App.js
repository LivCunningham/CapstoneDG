import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import Home from './Pages/Home.jsx'
import NewDate from './Pages/NewDate.jsx'
import Login from './Pages/Login.jsx'
import Registration from './Pages/Registration.jsx'
import Results from './Pages/Results.jsx'
import TheOne from './Pages/TheOne.jsx'
import Adventures from './Pages/Adventures.jsx'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route component={Registration} />
        <Route exact path="/NewDate'" component={NewDate} />
        <Route exact path="/Results" component={Results} />
        <Route exact path="/TheOne" component={TheOne} />
        <Route exact Path="/Adventures" component={Adventures} />
      </Layout>
    )
  }
}
