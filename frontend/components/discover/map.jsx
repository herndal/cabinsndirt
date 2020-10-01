import React, {
  useRef
} from 'react'
import { 
  Pincushion 
} from '../shared/helper'

// functional component attempting to use useRef hook
// export default () => {
//   const gMap = useRef("map");
//   return (
//     <div 
//     id="map-container" 
//     ref={gMap}>
//     </div>
//   )
// }

export default class Map extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.52822, lng: -77.456493 }, // this is RVA
      zoom: 12
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.Pincushion = new Pincushion(this.map);
    this.listen();
    this.Pincushion.placePins(this.props.locations);
  }

  componentDidUpdate() {
    this.Pincushion.placePins(this.props.locations);
  }

  listen() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateMap(bounds);
    });
  }

  render() {
    return (
      <div 
      id="map-container"
      ref={map => this.mapNode = map}> // this ref gives us access to the map dom node
      </div>
      )
  }
}