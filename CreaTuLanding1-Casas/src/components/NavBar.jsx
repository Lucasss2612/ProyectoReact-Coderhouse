import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="brand">Imprimagic</Link>

        <nav className="nav">
          <NavLink to="/" className={linkClass}>Inicio</NavLink>
          <NavLink to="/category/stickers" className={linkClass}>Stickers</NavLink>
          <NavLink to="/category/banners" className={linkClass}>Banners</NavLink>
          <NavLink to="/category/dtf" className={linkClass}>DTF</NavLink>
          <NavLink to="/cart" className={linkClass}>Carrito</NavLink>
        </nav>

        <CartWidget />
      </div>
    </header>
  );
}

export default NavBar;
