import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";

function CartWidget() {
  const { totalUnits } = useContext(CartContext);

  return (
    <Link to="/cart" className="cartwidget" title="Ver carrito">
      <span className="cartwidget__icon">🛒</span>
      <span className="cartwidget__badge">{totalUnits}</span>
    </Link>
  );
}

export default CartWidget;
