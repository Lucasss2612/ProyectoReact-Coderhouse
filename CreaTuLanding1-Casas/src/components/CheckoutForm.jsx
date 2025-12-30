import { useContext, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config.js";
import { CartContext } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

function CheckoutForm() {
  const { cart, totalPrice, clear } = useContext(CartContext);

  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  if (cart.length === 0 && !orderId) {
    return (
      <section>
        <h2>Checkout</h2>
        <p>Carrito vacío. Agregá productos para poder comprar.</p>
        <Link className="btn" to="/">Ir al catálogo</Link>
      </section>
    );
  }

  const handleChange = (e) => {
    setBuyer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.phone || !buyer.email) {
      alert("Completá nombre, teléfono y email.");
      return;
    }

    setLoading(true);

    const order = {
      buyer,
      items: cart.map((p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        qty: p.qty,
      })),
      total: totalPrice,
      createdAt: serverTimestamp(),
    };

    try {
      const ordersRef = collection(db, "orders");
      const docRef = await addDoc(ordersRef, order);
      setOrderId(docRef.id);
      clear();
    } catch (err) {
      alert("Error creando la orden. Revisá consola.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <section>
        <h2>Compra confirmada ✅</h2>
        <p>Tu ID de orden es:</p>
        <p className="orderid">{orderId}</p>
        <Link className="btn" to="/">Volver al catálogo</Link>
      </section>
    );
  }

  return (
    <section>
      <h2>Checkout</h2>
      <p>Total a pagar: <strong>$ {totalPrice.toLocaleString("es-AR")}</strong></p>

      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Nombre
          <input className="input" name="name" value={buyer.name} onChange={handleChange} />
        </label>

        <label className="label">
          Teléfono
          <input className="input" name="phone" value={buyer.phone} onChange={handleChange} />
        </label>

        <label className="label">
          Email
          <input className="input" name="email" value={buyer.email} onChange={handleChange} />
        </label>

        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Generando orden..." : "Confirmar compra"}
        </button>
      </form>
    </section>
  );
}

export default CheckoutForm;
