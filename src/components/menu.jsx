import africaBrown from "../assets/Africa-brown.svg";
import africaBlue from "../assets/Africa-blue.svg";
import africaGreen from "../assets/Africa-green.svg";
import indiaBrown from "../assets/India-brown.svg";
import indiaGreen from "../assets/India-green.svg";
import europeBrown from "../assets/Europe-brown.svg";

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
            <Link
              className="dropdown-item"
              to="/africa-literacy"
              // onClick={() =>
              //   menuClick(event, africaBrown, "Water Schools Africa - Literacy")
              // }
            >
              Literacy
            </Link>
            <Link
              className="dropdown-item"
              to="/africa-actions"
              // onClick={() =>
              //   menuClick(event, africaGreen, "Water Schools Africa - Action")
              // }
            >
              Actions
            </Link>

            <Link
              className="dropdown-item"
              to="/africa-methods"
              // onClick={() =>
              //   menuClick(event, "none", "Water Schools Africa - Methods")
              // }
            >
              Methods
            </Link>
            <Link
              className="dropdown-item"
              to="/africa-partners"
              // onClick={() =>
              //   menuClick(event, africaBlue, "Water Schools Africa - Partners")
              // }
            >
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
            <Link
              className="dropdown-item"
              to="/india-literacy"
              // onClick={() =>
              //   menuClick(event, indiaBrown, "Water Schools India - Literacy")
              // }
            >
              Literacy
            </Link>
            <Link
              className="dropdown-item"
              to="/india-actions"
              // onClick={() =>
              //   menuClick(event, indiaGreen, "Water Schools India - Action")
              // }
            >
              Actions
            </Link>
            <Link
              className="dropdown-item"
              to="/india-methods"
              // onClick={() =>
              //   menuClick(event, "none", "Water Schools India - Methods")
              // }
            >
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
            <Link
              className="dropdown-item"
              to="/europe-literacy"
              // onClick={() =>
              //   menuClick(event, europeBrown, "Water Schools Europe - Literacy")
              // }
            >
              Literacy
            </Link>
            <Link
              className="dropdown-item"
              to="/europe-methods"
              // onClick={() =>
              //   menuClick(event, "none", "Water Schools Europe - Literacy")
              // }
            >
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
