import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
const useCurrentStatus = useOnlineStatus(); 
  return (
    <div className="flex justify-between bg-slate-100 shadow-lg px-4" >
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="logo" />
      </div>
      <div className=" flex items-center">
      <ul className="flex px-4 m-4">
        <li className="px-4">Online Status:{useCurrentStatus?"✅":"🔴"}</li>
          <li className="px-4"> <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">Order</li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li className="px-4"> 
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
       
      </div>
    </div>
  );
};

export default Header;
