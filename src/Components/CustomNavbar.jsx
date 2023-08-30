import React, { useState } from 'react';
import '../CSS/CustomNavbar.css'; // Make sure to adjust the CSS as needed
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GridOnIcon from '@mui/icons-material/GridOn';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="search-box">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right-section">
        <div className="navbar-item">
          <ShoppingCartIcon />
        </div>
        <div className="navbar-item">
          <NotificationsIcon onClick={toggleDropdown} />
          {showDropdown && (
            <div className="dropdown">
              {/* Dropdown content */}
              <p>Notification 1</p>
              <p>Notification 2</p>
              {/* Add more notification items */}
            </div>
          )}
        </div>
        <div className="navbar-item">
          <GridOnIcon />
        </div>
        <div className="navbar-item" onClick={toggleDropdown}>
          <PersonIcon />
          <ArrowDropDownIcon />
          {showDropdown && (
            <div className="dropdown">
              {/* Dropdown content */}
              <p>Profile</p>
              <p>Settings</p>
              <p>Logout</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
