import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config.js";
import ItemDetail from "./ItemDetail.jsx";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const ref = doc(db, "products", id);

    getDoc(ref)
      .then((snap) => {
        if (snap.exists()) setItem({ id: snap.id, ...snap.data() });
        else setItem(null);
      })
      .catch(() => setItem(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando detalle...</p>;
  if (!item) return <p>Producto no encontrado.</p>;

  return <ItemDetail product={item} />;
}

export default ItemDetailContainer;
