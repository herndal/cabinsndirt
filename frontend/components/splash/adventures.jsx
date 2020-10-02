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
  title: "You've been inside for weeks.",
  tiles: [
    {
      index: 0,
      title: "Shred Gnar",
      subtext: "You must shred gnar",
      photoURL: "https://cabins-seeds.s3.amazonaws.com/shred-the-gnar.jpg",
    },
    {
      index: 1,
      title: "Stay Cool",
      subtext: "Cool your jets",
      photoURL: "https://cabins-seeds.s3.amazonaws.com/kayak-river.webp",
    },
    {
      index: 2,
      title: "Get Outside",
      subtext: "Explore in every season",
      photoURL: "https://cabins-seeds.s3.amazonaws.com/road-trees.jpg",
    },
  ],
};