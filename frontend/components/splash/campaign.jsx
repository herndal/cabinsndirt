import React from 'react';
import Header from '../shared/header';
import WhiteButton from '../shared/white_button';

export default (props) => {
  return (
    <div
      className="campaign"
      style={props.style}
      >
      <Header
      title={props.title}
      subtext={props.subtext}
      >
        <WhiteButton />
      </Header>
    </div>
  )
}