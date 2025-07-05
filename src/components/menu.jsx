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
              <Link className="nav-link" to="/about">
                About Water Schools
              </Link>
            </div>

            <div className="dropdown-submenu">
              <Link className="nav-link" to="/history-and-present">
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
              <Link className="dropdown-item" to="#">
                Water School Africa
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/africa-literacy">
                  Water Literacy
                </Link>
                <Link className="dropdown-item" to="/africa-methods">
                  Methods
                </Link>
                <Link className="dropdown-item" to="/africa-actions">
                  Actions
                </Link>
                <Link className="dropdown-item" to="/africa-partners">
                  Hubs
                </Link>
              </div>
            </div>

            <div className="dropdown-submenu">
              <Link className="dropdown-item" to="#">
                Water School India
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/india-literacy">
                  Water Literacy
                </Link>
                <Link className="dropdown-item" to="/india-actions">
                  Actions
                </Link>
                <Link className="dropdown-item" to="/india-methods">
                  Methods
                </Link>
              </div>
            </div>

            <div className="dropdown-submenu">
              <Link className="dropdown-item" to="#">
                Water School Europe
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/europe-literacy">
                  Literacy
                </Link>
                <Link className="dropdown-item" to="/europe-methods">
                  Methods
                </Link>
              </div>
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
              to="https://www.onepondfund.org/"
              target="_blank"
            >
              One Pond Fund
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
