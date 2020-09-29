import React from 'react';
import {
  Header 
}from '../shared/blocks';
import {
  imgStyle
} from '../shared/helper';

export const AdventureTile = ({ tile }) => (
  <Header
  className="adventure-tile"
  title={tile.title}
  subtext={tile.subtext}
  style={imgStyle(tile.photoURL)}/>
)

export const AdventureRow = ({ title, tiles }) => (
  <Header
    className="adventure-row"
    title={title}>
    <ul
      className="tiles-row">
      {tiles.map(tile => {
        return <AdventureTile
          key={tile.index}
          tile={tile} />
      })}
    </ul>
  </Header>
)

export const tallRow = {
  title: "Outdoor Experiences.",
  tiles: [
    {
      index: 0,
      title: "Unique Tiny Houses",
      subtext: "Small & Stylish",
      photoURL: "https://hipcamp-res.cloudinary.com/images/c_thumb,f_auto,q_60,h_953/v1572899400/campground-photos/hamwjtqwsdqffioglcvq/tiny-house-in-happy-valley-tiny-house-glamping-mountains.jpg"
    }, {
      index: 1,
      title: "Animal Experiences",
      subtext: "Horses, camels, goats & more",
      photoURL: "https://hipcamp-res.cloudinary.com/images/c_thumb,f_auto,q_60,h_953/v1513711999/campground-photos/jxhpqyakfthq93t8on4x/mudita-camel-s-yurt-camels-and-a-yurt-animal-camel.jpg"
    }, {
      index: 2,
      title: "Stunning Sunshine State",
      subtext: "Colorful camping & glamping",
      photoURL: "https://hipcamp-res.cloudinary.com/image/upload/c_thumb,f_auto,q_60,h_546/v1583516423/homepage_far_right_vertical_image_stq3nf.jpg"
    }
  ]
}