import React from 'react';

export const Header = (props) => (
  <div 
  className={props.className}
  style={props.style}>
    <div
    className={`${props.className}-header`}>
      <h2 
      className={`${props.className}-title`}>
        {props.title}
      </h2>
      <p 
      className={`${props.className}-subtext`}>
        {props.subtext}
      </p>
      {props.headerChildren}
    </div>
    <div 
    className={`${props.className}-body`}body>
      {props.children}
    </div>
  </div>
);