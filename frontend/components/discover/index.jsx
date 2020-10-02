import React from 'react'
import Tile from './tile'

export default class Index extends React.Component {
  render () {
    return (
    <div className="index">
      <ul className="quilt">
        {this.props.locations.map(location => {
          return (
            <Tile location={location} key={location.id}/>
          )
        })}
      </ul>
    </div>
    )
  }
}