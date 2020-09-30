import React from 'react'

export default class Index extends React.Component {

  componentDidMount() {
    this.props.getLocations()
  }

  render () {
    return (
    <div className="index">
      Index
    </div>
    )
  }
}