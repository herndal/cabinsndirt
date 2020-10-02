import React from 'react';

export const rand = (int) => Math.floor(Math.random() * int);

export const imgStyle = (url) => {
  return {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
  }
}

const blackPin = "https://cabins-seeds.s3.amazonaws.com/black_pin.svg";
const greenPin = "https://cabins-seeds.s3.amazonaws.com/green_pin.svg";

export class Pincushion {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.pins = {};
  }

  placePins(locations) {
    const locObj = {};
    locations.forEach(location => locObj[location.id] = location);
    
    locations
      .filter(loc => !this.pins[loc.id])
      .forEach(newLoc => this.pushPin(newLoc, this.handleClick));
    
    Object.keys(this.pins)
      .filter(id => !locObj[id])
      .forEach(id => this.pullPin(this.pins[id]));
  }

  pushPin(location) {
    const position = new google.maps.LatLng(location.latitude, location.longitude);
    const pin = new google.maps.Marker({
      position,
      map: this.map,
      icon: greenPin,
      locationId: location.id
    });

    pin.addListener('click', () => this.handleClick(location));
    this.pins[pin.locationId] = pin;
  }

  pullPin(pin) {
    this.pins[pin.locationId].setMap(null);
    delete this.pins[pin.locationId];
  }
}