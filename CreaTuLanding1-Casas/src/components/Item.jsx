import { Link } from "react-router-dom";

function Item({ product }) {
  const price = Number(product.price ?? 0);

  return (
    <article className="card">
      <img className="card__img" src={product.img} alt={product.title} />
      <div className="card__body">
        <h3 className="card__title">{product.title}</h3>
        <p className="card__price">$ {price.toLocaleString("es-AR")}</p>
        <Link className="btn" to={`/item/${product.id}`}>Ver detalle</Link>
      </div>
    </article>
  );
}

export default Item;
