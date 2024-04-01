import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
 const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
      <ul>
          <li> <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>Order</li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
       
      </div>
    </div>
  );
};

export default Header;
