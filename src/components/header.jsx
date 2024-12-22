import Menu from "./menu";
import wsLogo from "../assets/logo.svg";

export default function Header() {
  return (
    <div className="header">
      {/* <div className="nav">
        <a href="/" target="_blank">
          <img src={wsLogo} className="logo" alt="Water Schools" />
        </a>
        <Menu />
        <div className="tagline">
        <p>A co-created community space for water regeneration</p>
      </div>
      </div>
       */}
      <nav className="nav navbar navbar-expand-lg">
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
