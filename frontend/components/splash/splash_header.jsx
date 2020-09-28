import React from 'react';

import HomeSearch from "../search/homesearch_container";
import Header from '../shared/header';

export default () => {
  return (
    <div className="splash-header">
      <Header
        title="Find yourself outside."
        subtext="Discover and book tent camping, RV parks, cabins, treehouses, and glamping—everywhere from national parks to blueberry farms."
      />
      <HomeSearch />
    </div>
  );
};
