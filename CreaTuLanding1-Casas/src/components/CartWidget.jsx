function CartWidget({ count = 0 }) {
  return (
    <a href="#" className="btn btn-outline-light position-relative" title="Carrito">
      {}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.45C7.89 16.37 8.3 17 9 17h10v-2H9.42l.93-1.68h7.45c.75 0 1.41-.41 1.75-1.03l3.24-5.88A1 1 0 0 0 21.5 4H7zM7 20a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 .001 3.999A2 2 0 0 0 17 20z"/>
      </svg>
      {}
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        style={{ fontSize: '0.7rem' }}
      >
        {count}
        <span className="visually-hidden">items en el carrito</span>
      </span>
    </a>
  )
}

export default CartWidget
