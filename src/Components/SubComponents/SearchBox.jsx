import React from 'react';
import IconButton from '@mui/material/IconButton';
import '../../CSS/SearchBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchBox(props) {

  const inputStyle = {
    border: props.border ? '1px solid rgb(212, 212, 212)' : 'none',
  };

  return (
    <div className='search-box-container' style={inputStyle}>
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
