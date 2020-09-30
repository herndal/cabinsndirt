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
const campaign1 = "https://hipcamp-res.cloudinary.com/image/upload/q_auto,f_auto,c_thumb,w_1080/v1498456730/campground-photos/yene977lfve4yhhnokuh.jpg";

export default () => (
  <div
  className="splash">
    <SplashHeader />
    <div 
    className="splash-body">
      <Campaign
      style={imgStyle(campaign1)}
      title="Own land? Earn money on Cabins 'n Dirt"
      subtext="Host our community of good-natured campers, glampers, and RV travelers on your land or at your cabin."/>
      <AdventureRow
      title={tallRow.title}
      tiles={tallRow.tiles}/>
    </div>
  </div>
)

const SplashHeader = () => (
  <Header
  className="splash-header"
  title="Find yourself outside."
  subtext="Discover and book tent camping, RV parks, cabins, treehouses, and glamping—everywhere from national parks to blueberry farms.">
    <HomeSearch/>
  </Header>
)

const Campaign = (props) => (
  <Header
  className="campaign"
  style={props.style}
  title={props.title}
  subtext={props.subtext}
  headerChildren={<WhiteButton />}>
  </Header>
)