import africaBrown from "../assets/Africa-brown.svg";
import africaBlue from "../assets/Africa-blue.svg";
import africaGreen from "../assets/Africa-green.svg";
import indiaBrown from "../assets/India-brown.svg";
import indiaGreen from "../assets/India-green.svg";
import europeBrown from "../assets/Europe-brown.svg";

export default function Menu({ setDataUrl, setMapImg, setMap }) {
  const menuClick = (event, link, thisMapImg, thisMap) => {
    event.preventDefault();
    //console.log(link);
    setDataUrl(link);
    //console.log(thisMapImg);
    setMapImg(thisMapImg);
    setMap(thisMap);
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
                menuClick(event, "/africa-literacy.json", africaBrown, "Africa")
              }
            >
              Literacy
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() =>
                menuClick(event, "/africa-action.json", africaGreen, "Africa")
              }
            >
              Action
            </a>
            {/* <a
              className="dropdown-item"
              href="#"
              onClick={() => menuClick(event, "/africa-methods.json")}
            >
              Methods
            </a> */}
            <a
              className="dropdown-item"
              href="#"
              onClick={() =>
                menuClick(event, "/africa-partners.json", africaBlue, "Africa")
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
                menuClick(event, "/india-literacy.json", indiaBrown, "India")
              }
            >
              Literacy
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() =>
                menuClick(event, "/india-action.json", indiaGreen, "India")
              }
            >
              Action
            </a>
            {/* <a className="dropdown-item" href="#" 
              onClick={() => menuClick(event, "/india-methods.json")}
            >
              Methods
            </a> */}
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
                menuClick(event, "/europe-literacy.json", europeBrown, "Europe")
              }
            >
              Literacy
            </a>
            {/* <a className="dropdown-item" href="#"
              onClick={() => menuClick(event, "/europe-methods.json")}
            >
              Methods
            </a> */}
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
