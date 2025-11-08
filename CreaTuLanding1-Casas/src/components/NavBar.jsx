import CartWidget from './CartWidget.jsx'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        {/* Logo + Marca */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          {/* Logo simple en SVG (placeholder) */}
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M7 13h10l-1.5 5h-7z" fill="#fff"></path>
          </svg>
          <span>Imprimagic</span>
        </a>

        {/* Botón colapso */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links + Cart */}
        <div className="collapse navbar-collapse" id="navContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Productos</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
          </ul>

          {/* CartWidget se renderiza dentro de NavBar (requisito) */}
          <CartWidget count={2} />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
