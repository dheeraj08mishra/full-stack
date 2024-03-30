import {LOGO_URL} from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo-img"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Order</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
