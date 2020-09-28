import React from 'react';

import SplashHeader from './splash_header';
import Campaign from './campaign';

export default () => {
  return (
    <div className="splash">
      <SplashHeader />
      <Campaign />
    </div>
  );
}