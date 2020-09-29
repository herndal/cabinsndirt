import React from "react";
import {
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
  faCampground
} from "@fortawesome/free-solid-svg-icons";

export const GreenButton = ({ text }) => (
  <button
  className="green-button">
    {text}
  </button>
)

export const WhiteButton = ({ text = "Learn more" }) => (
  <button
  className="white-button">
    {text}
  </button>
)

export const SelectSingleCampType = () => (
  <select className="camptype-select fa-select">
    <option value="All Listings">All Listings</option>
    <option value="Camping">
      Camping
      <FontAwesomeIcon icon={faCampground} />
      </option>
    <option value="fa-igloo">&#xf7ae; Glamping</option>
    <option value="fa-caravan">&#xf8ff; RV Sites </option>
    <option value="fa-amazon">&#xf270; fa-amazon</option>
  </select>
)

export const DateRange = () => (
  <input 
  className="date-range" 
  type="date" />
)