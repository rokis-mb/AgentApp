import React, { useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import '../../CSS/SearchBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function SearchBox(props) {

  const inputRef = useRef(null);

  const inputStyle = {
    border: props.border ? '1px solid rgb(212, 212, 212)' : 'none',
  };

  const handleClear = () => {
    inputRef.current.value = ''; // Clear the input field's value
    props.onChange({ target: { value: '' } }); // Update the state value
    props.handleClear(); // Call the parent's handleClear function if needed
  };

  return (
    <div className='search-box-container' style={inputStyle}>
      <input
        ref={inputRef}
        className='search-box'
        placeholder="Search..."
        value={props.value}
        onChange={props.onChange}
      />
      <IconButton onClick={handleClear} size="small">
        <FontAwesomeIcon icon={faTimes} />
      </IconButton>
    </div>
  );
}

export default SearchBox;
