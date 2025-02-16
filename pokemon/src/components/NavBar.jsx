import { Search } from "lucide-react";
import "../styles/Nav.css";

export function NavBar() {
  return (
    <nav>
      <img
        className="brand"
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        alt="Pokemon"
      />
      <ul className="menu">
        <li className="menu-item">Home</li>
        <li className="menu-item">Pokemon</li>
      </ul>
      <Search className="search-icon" />
    </nav>
  );
}
