import React from 'react';

export default (props) => (
  <div className="header">
    <h2 className="title">{props.title}</h2>
    <p className="subtext">{props.subtext}</p>
    <section className="header-body">{props.children}</section>
  </div>
)