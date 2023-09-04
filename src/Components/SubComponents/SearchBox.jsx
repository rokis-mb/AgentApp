import React from 'react';
import IconButton from '@mui/material/IconButton';
import '../../CSS/SearchBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchBox(props) {

  return (
    <div className='search-box-container'>
      <input
        className='search-box'
        placeholder="Search..."

      />
      <IconButton onClick={props.handleSearch} size="small">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </IconButton>

    </div>
  );
}

export default SearchBox;
