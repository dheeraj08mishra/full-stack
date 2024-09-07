import logoImage from "../../Assets/image.png";
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
              <a href="#">Home </a>
            </li>
            <li>
              <a href="#">About </a>
            </li>
            <li>
              <a href="#">Cart </a>
            </li>
            <li>
              <a href="#">Contact </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
