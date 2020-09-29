import React, { 
  useState 
} from 'react';
import {
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import {
  SelectSingleCampType,
  DateRange,
  GreenButton
} from '../shared/inputs';

// from search box focus, on enter key press: add clear button to search box, and bring focus to next element (calendar)
export const HomeSearch = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-box-container">
      <div className="search-row row-1">
        <SearchBox searchText={searchText} setSearchText={setSearchText} />
        <button className="search-clear" onClick={() => setSearchText("")}>Clear</button>
      </div>
      <div className="search-row row-2">
        <DateRange />
        <SelectSingleCampType />
        <GreenButton text="Search" />
      </div>
    </div>
  );
}

export const SearchBox = ({ searchText, setSearchText }) => {
  return (
    <div className="search-box">
      <FontAwesomeIcon icon={faSearch} />
      <input
        className="textfield"
        type="text"
        placeholder="Try Yosemite, Napa, Moab..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
    </div>
  );
}