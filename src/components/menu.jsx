export default function Menu() {
  return (
    // <div className="menu">
    //   <ul>
    //     <li>
    //       <a href="">Water School Africa</a>
    //     </li>
    //     <li>
    //       <a href="">Water School India</a>
    //     </li>
    //     <li>
    //       <a href="">Water School Europe</a>
    //     </li>
    //     <li>
    //       <a href="">Contact</a>
    //     </li>
    //     <li>
    //       <a href="">More</a>
    //     </li>
    //   </ul>
    // </div>
    <div
      className="menu collapse navbar-collapse justify-content-end"
      id="navbarNavDropdown"
    >
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Water School Africa <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Water School India
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Water School Europe
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
            Contact
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
