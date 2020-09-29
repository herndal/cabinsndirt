import React from 'react';
import Header from '../shared/header';
import AdventureTile from './adventure_tile';

export default ({ tiles }) => (
  <div>
    <Header>
      <ul>
        {tiles.map((tile) => {
          return (
            <AdventureTile
            tile="tile"
            />
          )
        })}
      </ul>
    </Header>
  </div>
);