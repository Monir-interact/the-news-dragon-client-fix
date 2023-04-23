import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <p className="text-secondary">
        <small>Journalism Without Fear or Favour</small>
      </p>
    </div>
  );
};

export default Header;
