import logo from "../../assets/planet.png";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const links = [
    { id: 1, path: "/", text: "Rockets" },
    { id: 2, path: "/missions", text: "Missions" },
    { id: 3, path: "/myProfile", text: "My Profile" },
  ];

  return (
    <header>
      <nav className="d-flex justify-content-between align-items-center px-4 pt-2 mb-4 border-bottom">
        <div>
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" style={{ width: "2em" }} />
            <span className="text-dark fs-2 ms-2">
              Space Travelers&apos; Hub
            </span>
          </Link>
        </div>
        <div>
          <ul className="d-flex list">
            {links.map((link) => (
              <li key={link.id} className="px-3 list-item">
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
