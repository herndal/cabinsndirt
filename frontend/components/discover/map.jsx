import React, {
  useRef
} from 'react'
import Pincushion from '../../util/map_util'

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
    this.Pincushion.placePins();
  }

  componentDidUpdate() {
    this.Pincushion.placePins();
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