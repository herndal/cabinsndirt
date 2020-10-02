import React from 'react';
import HomeSearch from "../search/homesearch_container";
import {
  Header 
}from '../shared/blocks';
import {
  WhiteButton 
} from '../shared/inputs';
import { 
  imgStyle 
} from '../shared/helper';
import { 
  AdventureRow,
  tallRow
} from './adventures';

//images
const campaign1 = "https://cabins-seeds.s3.amazonaws.com/lee.jpg";

export default () => (
  <div
  className="splash">
    <SplashHeader />
    <div 
    className="splash-body">
      <Campaign
      style={imgStyle(campaign1)}
      title="Change your perspective"
      subtext="Join our growing community of hosts and campers for unique travel experiences."/>
      <AdventureRow
      title={tallRow.title}
      tiles={tallRow.tiles}/>
    </div>
  </div>
)

const SplashHeader = () => (
  <Header
  className="splash-header"
  title="Get lost."
  subtext="From a riverside cabin to a flat dirt patch, booking a great location for your needs is simpler than ever. Plan a trip today!">
    <HomeSearch/>
  </Header>
)

const Campaign = (props) => (
  <Header
  className="campaign"
  style={props.style}
  title={props.title}
  subtext={props.subtext}
  headerChild={<WhiteButton />}>
  </Header>
)