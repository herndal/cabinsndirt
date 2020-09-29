import React from 'react';

import SplashHeader from './splash_header';
import Campaign from './campaign';

const imgStyle = (url) => {
  return { backgroundImage: `url(${url})`}
};

const campaign1 = "https://hipcamp-res.cloudinary.com/image/upload/q_auto,f_auto,c_thumb,w_1080/v1498456730/campground-photos/yene977lfve4yhhnokuh.jpg";

export default () => {
  return (
    <div className="splash">
      <SplashHeader />
      <div className="splash-body">
        <Campaign
          style={imgStyle(campaign1)}
          title="Own land? Earn money on Cabins 'n Dirt"
          subtext="Host our community of good-natured campers, glampers, and RV travelers on your land or at your cabin."
        />
      </div>
    </div>
  );
}