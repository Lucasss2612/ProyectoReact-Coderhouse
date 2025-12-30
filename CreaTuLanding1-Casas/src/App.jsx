import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";
import CheckoutForm from "./components/CheckoutForm.jsx";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Imprimagic Store 🛒" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Explorá por categoría" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<h2>404 — Página no encontrada</h2>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
