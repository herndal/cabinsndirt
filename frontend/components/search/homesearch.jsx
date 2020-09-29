import React, { useState } from 'react';

import SearchBox from './search_box';
import DateRange from '../shared/date-range';
import CampTypeSelect from '../shared/camptype_select';
import GreenButton from '../shared/green_button';

export default () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-box-container">
      <div className="search-row row-1">
        <SearchBox searchText={searchText} setSearchText={setSearchText} />
        <button className="search-clear" onClick={() => setSearchText("")}>Clear</button>
      </div>
      <div className="search-row row-2">
        <DateRange />
        <CampTypeSelect />
        <GreenButton text="Search" />
      </div>
    </div>
  );
}

// from search box focus, on enter key press: add clear button to search box, and bring focus to next element (calendar)