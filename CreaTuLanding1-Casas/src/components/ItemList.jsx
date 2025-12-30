import Item from "./Item.jsx";

function ItemList({ items }) {
  return (
    <div className="grid">
      {items.map((p) => (
        <Item key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ItemList;
