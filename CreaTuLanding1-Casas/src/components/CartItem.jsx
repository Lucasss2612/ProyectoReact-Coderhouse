import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);
  const subtotal = item.qty * item.price;

  return (
    <article className="cartitem">
      <img className="cartitem__img" src={item.img} alt={item.title} />
      <div className="cartitem__info">
        <h3 className="cartitem__title">{item.title}</h3>
        <p>Cantidad: {item.qty}</p>
        <p>Precio: $ {Number(item.price).toLocaleString("es-AR")}</p>
        <p><strong>Subtotal:</strong> $ {subtotal.toLocaleString("es-AR")}</p>
      </div>
      <button className="btn btn--danger" onClick={() => removeItem(item.id)}>Eliminar</button>
    </article>
  );
}

export default CartItem;
