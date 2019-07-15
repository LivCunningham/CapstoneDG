import React, { Component } from 'react'

class BarFeedItem extends Component {
  render() {
    return (
      <>
        <h2>{this.props.name}</h2>
        <p>{this.props.type}</p>
        <p>{this.props.location}</p>
      </>
    )
  }
}

export default BarFeedItem
