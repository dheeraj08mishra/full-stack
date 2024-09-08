import logoImage from "../../Assets/image.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      <div>
        <img src={logoImage} alt="logo" />
      </div>
      <div className="navBar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/about">About </Link>
            </li>
            <li>
              <Link to="/cart">Cart </Link>
            </li>
            <li>
              <Link to="/contact">Contact </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
