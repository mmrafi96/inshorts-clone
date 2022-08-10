import React from "react";
import HamburgerButton from "./HamburgerButton";
import "./NavInShorts.css";
const NavInShorts = ( {setCategory}) => {
  return (
    <div>
      <div className="header">
        <div className="icon"><HamburgerButton setCategory={setCategory} /></div> 
        <img
          className="logo"
          src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="logo"
          
        />
      </div>
    </div>
  );
};

export default NavInShorts;
