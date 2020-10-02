import React from 'react'
import {
  Link
} from 'react-router-dom'
import {
  icons,
  Header,
  Carousel
} from '../shared/blocks'
import {
  InstantBook
} from '../shared/inputs'
import {
  rand
} from '../shared/helper'

export default ({location}) => {

  const types = location.types.split(" ")

    .map(type => {
      return (
      <li key={type}>
        {icons[type]}
      </li>
      )
  });

  return (
    <Header
      className="tile"
      title={
        <div className="title-row">
          <Link to={`/locations/${location.id}`}>{location.title}</Link>
          <ul className="tile-types">{types}</ul>
        </div>
      }
      subtext={location.description}
      headerChild={
        <div className="tile-info">
          <div className="tile-review">
            <div className="green">
              {icons.review}
              <span>{` ${rand(100)}%`}</span>
            </div>
            <p>-- {rand(300)} Reviews</p>
          </div>
          <div className="tile-price">{`$${location.price}/night`}</div>
        </div>
      }
    >
      <Carousel 
        urls={location.photoUrls}>
        <InstantBook />
        <button className="save-button">{icons.like}</button>
      </Carousel>
    </Header>
  );
}

//icons from fontAwesome, saved to AWS


// TILE
//   header
//     title
//     subtext (host writes title. default is host_name's land)
//     icons (camp, cabin, or rv)
//     reviews (icon, percentage -- num reviews. No reviews? => number of saves)
//     price/night
//   body
//     photos carousel
//     instant book button
//     save button

// STYLE
// display: flex, column-reverse (body then header)
// width, height, border-radius

// HOVER
// instant book: info media
// subtext: underline
// icons: info media

// PROPERTIES
//   props: location info
//   'highlight' prop or state?

// HIGHLIGHT (hover)
//   -header background darkens
//   -carousel scroll arrows appear
//   -pin turns black on map
//   -media pops open on map (link to show page)


// #  id          :bigint           not null, primary key
// #  description :text
// #  address     :string           not null
// #  types       :string           not null
// #  longitude   :float            not null
// #  latitude    :float            not null
// #  price       :float            not null
// #  capacity    :integer          not null
// #  created_at  :datetime         not null
// #  updated_at  :datetime         not null

//Sample location (1):
// address: "4308 Hermitage Rd, Richmond, VA 23227";
// capacity: 50;
// latitude: 37.5928;
// longitude: -77.474441;
// photoUrls: (7)[
//   ("/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2…633572db04f238ee112858bfad782618/bryan_park_1.jpg",
//   "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2…590ed674796831cdb0ba20cfea0f9742/bryan_park_2.jpg",
//   "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2…915c6f4ff1462e27d704007e7c3850b9/bryan_park_3.jpg",
//   "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2…3155b877fa0a15688554c54ad6a7a169/bryan_park_4.jpg",
//   "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2…03d89650c25dc3ba6b10ac53aa624549/bryan_park_5.jpg",
//   "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2…2c73b6f79b5fe92bd536047d1d810a4b/bryan_park_6.jpg",
//   "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2…e23d247d3532b9d21aeeddcf3895cca3/bryan_park_7.jpg")
// ];
// price: 0;
// types: "camping";
