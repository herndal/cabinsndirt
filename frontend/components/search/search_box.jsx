import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default ({searchText, setSearchText}) => {
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