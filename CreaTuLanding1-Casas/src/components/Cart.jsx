import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import CartItem from "./CartItem.jsx";

function Cart() {
  const { cart, clear, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <section>
        <h2>Carrito</h2>
        <p>Carrito vacío.</p>
        <Link className="btn" to="/">Volver al catálogo</Link>
      </section>
    );
  }

  return (
    <section>
      <h2>Carrito</h2>

      <div className="cartlist">
        {cart.map((p) => (
          <CartItem key={p.id} item={p} />
        ))}
      </div>

      <div className="cartfooter">
        <p className="total"><strong>Total:</strong> $ {totalPrice.toLocaleString("es-AR")}</p>
        <div className="rowgap">
          <button className="btn btn--ghost" onClick={clear}>Vaciar carrito</button>
          <Link className="btn" to="/checkout">Ir a checkout</Link>
        </div>
      </div>
    </section>
  );
}

export default Cart;
