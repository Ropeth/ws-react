export default function Menu({ setDataUrl }) {
  const menuClick = (event, link) => {
    event.preventDefault();
    console.log(link);
    setDataUrl(link);
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
              onClick={() => menuClick(event, "/africa-literacy.json")}
            >
              Literacy
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => menuClick(event, "/africa-action.json")}
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
              onClick={() => menuClick(event, "/africa-partners.json")}
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
              onClick={() => menuClick(event, "/india-literacy.json")}
            >
              Literacy
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => menuClick(event, "/india-action.json")}
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
              onClick={() => menuClick(event, "/europe-literacy.json")}
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
