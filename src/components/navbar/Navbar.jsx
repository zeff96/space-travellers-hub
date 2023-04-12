import logo from "../../assets/planet.png";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const links = [
    { id: 1, path: "/", text: "Rockets" },
    { id: 2, path: "/missions", text: "Missions" },
    { id: 3, path: "/myProfile", text: "My Profile" },
  ];

  const [isCollapsed, setIsCollapsed] = useState(true);
  function handleToggle() {
    return setIsCollapsed(!isCollapsed);
  }

  return (
    <nav className="navbar navbar-expand-md bg-body-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" style={{ width: "2em" }} />
          <span className="text-dark fs-2 ms-2">Space Travelers&apos; Hub</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded={isCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbar"
        >
          <ul className="navbar-nav ms-auto">
            {links.map((link) => (
              <li key={link.id} className="list">
                <NavLink className="list-item" to={link.path}>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
