import africaBrown from "../assets/Africa-brown.svg";
import africaBlue from "../assets/Africa-blue.svg";
import africaGreen from "../assets/Africa-green.svg";
import indiaBrown from "../assets/India-brown.svg";
import indiaGreen from "../assets/India-green.svg";
import europeBrown from "../assets/Europe-brown.svg";

export default function Menu({ setThisPage, setMapImg, setMap }) {
  const menuClick = (event, link, thisMapImg, thisMap, pageTitle) => {
    event.preventDefault();
    if (thisMapImg === "none") {
      $("#map").hide();
    } else {
      $("#map").show();
      setMapImg(thisMapImg);
      setMap(thisMap);
    }
    setThisPage(link);
    document.title = pageTitle;
  };

  return (
    <div
      className="menu collapse navbar-collapse justify-content-end"
      id="navbarNavDropdown"
    >
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Water School Africa
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a
              className="dropdown-item"
              href="#"
              onClick={() =>
                menuClick(
                  event,
                  "africa-literacy",
                  africaBrown,
                  "Africa",
                  "Water Schools Africa - Literacy"
                )
              }
            >
              Literacy
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() =>
                menuClick(
                  event,
                  "africa-action",
                  africaGreen,
                  "Africa",
                  "Water Schools Africa - Action"
                )
              }
            >
              Action
            </a>

            <a
              className="dropdown-item"
              href="#"
              onClick={() =>
                menuClick(
                  event,
                  "africa-literacy",
                  "none",
                  "Africa",
                  "Water Schools Africa - Methods"
                )
              }
            >
              Methods
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() =>
                menuClick(
                  event,
                  "africa-partners",
                  africaBlue,
                  "Africa",
                  "Water Schools Africa - Partners"
                )
              }
            >
              Partners
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Water School India
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a
              className="dropdown-item"
              href="#"
              onClick={() =>
                menuClick(
                  event,
                  "india-literacy",
                  indiaBrown,
                  "India",
                  "Water Schools India - Literacy"
                )
              }
            >
              Literacy
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() =>
                menuClick(
                  event,
                  "india-action",
                  indiaGreen,
                  "India",
                  "Water Schools India - Action"
                )
              }
            >
              Action
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() =>
                menuClick(
                  event,
                  "india-literacy",
                  "none",
                  "India",
                  "Water Schools India - Methods"
                )
              }
            >
              Methods
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Water School Europe
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a
              className="dropdown-item"
              href="#"
              onClick={() =>
                menuClick(
                  event,
                  "europe-literacy",
                  europeBrown,
                  "Europe",
                  "Water Schools Europe - Literacy"
                )
              }
            >
              Literacy
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() =>
                menuClick(
                  event,
                  "europe-literacy",
                  "none",
                  "Europe",
                  "Water Schools Europe - Literacy"
                )
              }
            >
              Methods
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            More
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a className="dropdown-item" href="#">
              Water Schools
            </a>
            <a className="dropdown-item" href="#">
              Flow Partnership
            </a>
            <a className="dropdown-item" href="#">
              One Pond Fund
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
