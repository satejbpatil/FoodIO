import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../Images/logo.png";
// import { useState } from "react";
const Menu = () => {
  return (
    <div className="header-middle">
      <ul>
        <Link to="/">
          <li className="header-middle-li">Home</li>
        </Link>
        <Link to="/about">
          <li className="header-middle-li">Services</li>
        </Link>
        <Link to="/about">
          <li className="header-middle-li">About Us</li>
        </Link>
        <Link to="/contact_us">
          <li className="header-middle-li">Contact Us</li>
        </Link>
      </ul>
    </div>
  );
};

const User = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="user">
      <ul>
        {isLoggedIn ? (
          <li onClick={() => setIsLoggedIn(false)}>LogOut</li>
        ) : (
          <>
            <li onClick={() => setIsLoggedIn(true)}>Log In</li>
            <li onClick={() => setIsLoggedIn(true)}>Sign In</li>
          </>
        )}
      </ul>
    </div>
  );
};

const Header = () => {
  // const [title, setTitle] = useState("FOODIO");
  return (
    <div className="header-outside">
      <div className="header">
        <div className="logo-name">
          <a href="/">
            <img
              src={logo}
              alt="Image"
              style={{ mixBlendMode: "darken" }}
              height="40px"
              width="auto"
            />
          </a>
        </div>
        <Menu />
        <User />
      </div>
      <div className="header-cout">
        <h1 className="header-cout-className" id="header_name">
          FOODIO
          {/* {title} */}
        </h1>
        {/* <button onClick={() =>setTitle("Satej Patil")}>Change</button> */}
        <h1 className="header-cout-className">
          Discover the best food & drinks
        </h1>
      </div>
    </div>
  );
};

export default Header;
