import React, {
  useEffect
} from 'react'
import FiltersBar from './filters_bar'
import Index from './index'

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

export default class Discover extends React.Component {
  componentDidMount() {
    this.props.getLocations()
  }

  render() {
    return (
      <div
      className="discover">
        Discover
        <FiltersBar />
        <Index />
      </div>
    )
  }
}