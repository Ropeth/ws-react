import Menu from "./menu";
import wsLogo from "../assets/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="nav">
        <a href="/" target="_blank">
          <img src={wsLogo} className="logo" alt="Water Schools" />
        </a>
        <Menu />
      </div>
      <div className="tagline">
        <p>A co-created community space for water regeneration</p>
      </div>
    </div>
  );
}
