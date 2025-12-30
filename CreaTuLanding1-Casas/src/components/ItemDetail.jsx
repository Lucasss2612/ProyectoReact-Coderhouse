import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";
import ItemCount from "./ItemCount.jsx";
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const onAdd = (qty) => {
    addItem(product, qty);
    setAdded(true);
  };

  const price = Number(product.price ?? 0);
  const stock = Number(product.stock ?? 0);

  return (
    <section className="detail">
      <img className="detail__img" src={product.img} alt={product.title} />
      <div className="detail__info">
        <h2 className="detail__title">{product.title}</h2>
        <p className="detail__desc">{product.description}</p>
        <p className="detail__meta">
          <strong>Precio:</strong> $ {price.toLocaleString("es-AR")}
        </p>
        <p className="detail__meta">
          <strong>Stock:</strong> {stock}
        </p>

        {stock <= 0 && <p className="danger">Producto sin stock</p>}

        {/* Oculta ItemCount después de agregar */}
        {!added && stock > 0 && (
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        )}

        {added && (
          <div className="addedBox">
            <p>✅ Agregado al carrito</p>
            <div className="rowgap">
              <Link className="btn" to="/cart">Ir al carrito</Link>
              <Link className="btn btn--ghost" to="/">Seguir comprando</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ItemDetail;
