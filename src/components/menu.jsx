import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div
      className="menu collapse navbar-collapse justify-content-end"
      id="navbarNavDropdown"
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/home">
            Home
          </Link>
        </li>

        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownWaterSchoolsLink"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            About
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownWaterSchoolsLink"
          >
            <div className="dropdown-submenu">
              <Link className="dropdown-item" to="/about">
                About Water Schools
              </Link>
            </div>

            <div className="dropdown-submenu">
              <Link className="dropdown-item" to="/what-we-do">
                What We Do
              </Link>
            </div>

            <div className="dropdown-submenu">
              <Link className="dropdown-item" to="/history-and-present">
                History &amp; Present
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownWaterSchoolsLink"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Water Schools
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownWaterSchoolsLink"
          >
            <div className="dropdown-submenu">
              <Link className="dropdown-item" to="/india-literacy">
                Water School India
              </Link>
            </div>

            <div className="dropdown-submenu">
              <Link className="dropdown-item" to="/africa-literacy">
                Water School Africa
              </Link>
            </div>

            <div className="dropdown-submenu">
              <Link className="dropdown-item" to="/europe-literacy">
                Water School Europe
              </Link>
            </div>

            <div className="dropdown-submenu">
              <Link className="dropdown-item" to="/s-america-literacy">
                Water School S. America
              </Link>
            </div>

            <div className="dropdown-submenu">
              <Link className="dropdown-item" to="/middle-east-literacy">
                Water School Middle East
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownFlowPartnershipLink"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Flow Partnership
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownFlowPartnershipLink"
          >
            <Link
              className="dropdown-item newtab"
              to="https://www.theflowpartnership.org/"
              target="_blank"
            >
              Flow Partnership
            </Link>
            <Link
              className="dropdown-item newtab"
              to="https://waterschoolsnetwork.org/"
              target="_blank"
            >
              Water Schools Network
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
