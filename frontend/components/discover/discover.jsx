import React, {
  useEffect
} from 'react'
import {
  Header
} from '../shared/blocks'
import FiltersBar from './filters_bar'
import Index from './index'
import Map from './map'


export default ({ locations, updateMap }) => (
  <Header
  className="discover"
  headerChildren={<FiltersBar />}>
    <Index
    locations={locations}/>
    <div
    className="map-box">
      <Map
      updateMap={updateMap}
      locations={locations} />
    </div>
  </Header>
)

// export default class Discover extends React.Component {
//   render() {
//     debugger;
//     return (
//       <Header
//       className="discover"
//       headerChildren={<FiltersBar />}>
//         <Index
//         locations={this.props.locations} />
//         <div
//         className="map-box">
//           <Map
//           updateBounds={this.props.updateBounds}
//           locations={this.props.locations} />
//         </div>
//       </Header>
//     )
//   }
// }

//failed functional attempting to useEffect to fetch data
//caused infinite fetching loop (location is undefined in useEffect?)
// export default (props) => {
//   const locations = props.locations;

//   debugger;
//   useEffect(() => {
//     debugger;
//     props.getLocations();
//   }, [locations]);

//   return (
//     <div
//     className="discover">
//       Discover
//       <FiltersBar />
//       <Index />
//     </div>
//   );
// }

//class component, first called fetchLocations, now passing down to index
// export default class Discover extends React.Component {

//   render() {
//     return (
//       <div
//       className="discover">
//         Discover
//         <FiltersBar />
//         <Index
//         getLocations={this.props.getLocations}/>
//         <Map />
//       </div>
//     )
//   }
// }