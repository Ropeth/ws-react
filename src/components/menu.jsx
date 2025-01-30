import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div
      className="menu collapse navbar-collapse justify-content-end"
      id="navbarNavDropdown"
    >
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Water School Africa
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link className="dropdown-item" to="/africa-literacy">
              Literacy
            </Link>
            <Link className="dropdown-item" to="/africa-actions">
              Actions
            </Link>

            <Link className="dropdown-item" to="/africa-methods">
              Methods
            </Link>
            <Link className="dropdown-item" to="/africa-partners">
              Partners
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Water School India
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link className="dropdown-item" to="/india-literacy">
              Literacy
            </Link>
            <Link className="dropdown-item" to="/india-actions">
              Actions
            </Link>
            <Link className="dropdown-item" to="/india-methods">
              Methods
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Water School Europe
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link className="dropdown-item" to="/europe-literacy">
              Literacy
            </Link>
            <Link className="dropdown-item" to="/europe-methods">
              Methods
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            More
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link className="dropdown-item" to="/about">
              About Water Schools
            </Link>
            <Link
              className="dropdown-item"
              to="https://www.theflowpartnership.org/"
              target="_blank"
            >
              Flow Partnership
            </Link>
            <Link
              className="dropdown-item"
              to="https://www.onepondfund.org/"
              target="_blank"
            >
              One Pond Fund
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
