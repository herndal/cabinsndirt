import React, {
  useEffect
} from 'react'
import FiltersBar from './filters_bar'
import Index from './index'
import Map from './map'


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


export default ({locations, getLocations}) => (
  <div
  className="discover">
    Discover
    <FiltersBar />
    <Index
    locations={locations}
    getLocations={getLocations} />
    <Map />
  </div>
)