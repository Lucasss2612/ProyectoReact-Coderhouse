import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "15px", color: "#fff" }}>Inicio</Link>
      <Link to="/categoria" style={{ marginRight: "15px", color: "#fff" }}>Categoría</Link>
      <Link to="/categoria-1" style={{ marginRight: "15px", color: "#fff" }}>Categoría 1</Link>
      <Link to="/item" style={{ marginRight: "15px", color: "#fff" }}>Item</Link>
      <Link to="/detalle" style={{ marginRight: "15px", color: "#fff" }}>Detalle</Link>
    </nav>
  )
}

export default NavBar
