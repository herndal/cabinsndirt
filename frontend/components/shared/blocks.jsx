import React, {
  useState
} from 'react';
import {
  imgStyle
} from './helper'

export const icons = {
  camping: <img className="icon camping" src="https://cabins-seeds.s3.amazonaws.com/camping-gray.svg"/>,
  rv: <img className="icon rv" src="https://cabins-seeds.s3.amazonaws.com/rv-gray.svg"/>,
  cabin: <img className="icon cabin" src="https://cabins-seeds.s3.amazonaws.com/cabin-gray.svg"/>,
  left: <img className="icon left" src="https://cabins-seeds.s3.amazonaws.com/left-white.svg"/>,
  right: <img className="icon right" src="https://cabins-seeds.s3.amazonaws.com/right-white.svg"/>,
  like: <img className="icon like" src="https://cabins-seeds.s3.amazonaws.com/like-white.svg"/>,
  liked: <img className="icon liked" src="https://cabins-seeds.s3.amazonaws.com/liked-white.svg"/>,
  review: <img className="icon review" src="https://cabins-seeds.s3.amazonaws.com/thumbs-up-green.svg"/>,
}

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
      {props.headerChild}
    </div>
    <div 
      className={`${props.className}-body`}>
      {props.children}
    </div>
  </div>
)

export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  slideLeft() {
    const { index } = this.state;
    const nextIndex = index === 0 ? this.props.urls.length - 1 : index - 1;
    this.setState({
      index: nextIndex
    })
  }

  slideRight() {
    const { index } = this.state;
    const nextIndex = (index + 1) % this.props.urls.length;
    this.setState({
      index: nextIndex
    })
  }

  render() {
    return (
      <div className="carousel">
        <Slide url={this.props.urls[this.state.index]}>
          <div className="arrows">
            <Arrow direction="left" click={this.slideLeft} icon={icons.left} />
            <Arrow
              direction="right"
              click={this.slideRight}
              icon={icons.right}
            />
          </div>
          <div className="options">
            {this.props.children}
          </div>
        </Slide>
      </div>
    );
  }
}

const Slide = (props) => {
  return (
    <div className="slide" style={imgStyle(props.url)}>
      {props.children}
    </div>
  )
}

const Arrow = ({ direction, click, icon }) => (
  <div className={`slide-arrow ${direction}`} onClick={click}>
    {icon}
  </div>
)