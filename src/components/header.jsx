import Menu from "./menu";
import wsLogo from "../assets/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <nav className="nav navbar navbar-expand-md navbar-light">
        <a className="navbar-brand" href="#">
          <img src={wsLogo} className="logo" alt="Water Schools" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Menu />
      </nav>
      <div className="tagline">
        <p>A co-created community space for water regeneration</p>
      </div>
    </div>
  );
}
//navbar-light makes burger menu appear but changes colour of menu
