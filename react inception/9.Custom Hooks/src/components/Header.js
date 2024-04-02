import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
 import Grocery from "./Grocery";
const Header = () => {
//  const [btnName, setBtnName] = useState("Login");
const useCurrentStatus = useOnlineStatus(); 
console.log(useCurrentStatus)
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
      <ul>
        <li>Online Status:{useCurrentStatus?"✅":"🔴"}</li>
          <li> <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>Order</li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
       
      </div>
    </div>
  );
};

export default Header;
