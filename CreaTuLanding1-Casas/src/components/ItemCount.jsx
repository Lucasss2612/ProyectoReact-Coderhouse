import { useState } from "react";

function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const safeInitial = Math.max(1, Math.min(initial, stock || 1));
  const [qty, setQty] = useState(safeInitial);

  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => Math.min(stock, q + 1));

  return (
    <div className="count">
      <button className="btn btn--ghost" onClick={dec} disabled={qty <= 1}>-</button>
      <span className="count__qty">{qty}</span>
      <button className="btn btn--ghost" onClick={inc} disabled={qty >= stock}>+</button>

      <button className="btn" onClick={() => onAdd?.(qty)} disabled={stock <= 0}>
        Agregar
      </button>
    </div>
  );
}

export default ItemCount;
