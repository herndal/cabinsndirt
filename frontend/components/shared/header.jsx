import React from 'react';

export default ({title, subtext}) => (
  <div className="header">
    <h2 className="title">{title}</h2>
    <p className="subtext">{subtext}</p>
  </div>
)