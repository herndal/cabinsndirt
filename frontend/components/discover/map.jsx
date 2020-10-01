import React, {
  useRef
} from 'react'

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

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
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