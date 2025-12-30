import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config.js";
import ItemList from "./ItemList.jsx";

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "products");
    const q = categoryId ? query(productsRef, where("category", "==", categoryId)) : productsRef;

    getDocs(q)
      .then((snap) => {
        const docs = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setItems(docs);
      })
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <>
      <h1 className="title">{categoryId ? `Categoría: ${categoryId}` : "Catálogo"}</h1>
      {greeting ? <p className="subtitle">{greeting}</p> : null}

      {loading && <p>Cargando productos...</p>}

      {!loading && items.length === 0 && (
        <p>No hay productos para mostrar (o la categoría no existe).</p>
      )}

      {!loading && items.length > 0 && <ItemList items={items} />}
    </>
  );
}

export default ItemListContainer;
