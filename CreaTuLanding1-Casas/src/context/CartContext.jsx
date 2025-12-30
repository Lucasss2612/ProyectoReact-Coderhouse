import { createContext, useMemo, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); 

  const addItem = (product, qty) => {
    if (!product || qty <= 0) return;

    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);

      if (existing) {
        const newQty = Math.min(existing.qty + qty, product.stock ?? existing.stock ?? Infinity);
        return prev.map((p) => (p.id === product.id ? { ...p, qty: newQty } : p));
      }

      return [...prev, { ...product, qty: Math.min(qty, product.stock ?? qty) }];
    });
  };

  const removeItem = (id) => setCart((prev) => prev.filter((p) => p.id !== id));

  const clear = () => setCart([]);

  const totalUnits = useMemo(() => cart.reduce((acc, p) => acc + p.qty, 0), [cart]);

  const totalPrice = useMemo(() => cart.reduce((acc, p) => acc + p.qty * p.price, 0), [cart]);

  const value = {
    cart,
    addItem,
    removeItem,
    clear,
    totalUnits,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
