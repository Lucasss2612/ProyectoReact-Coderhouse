// src/App.jsx
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Categoria from "./components/Categoria"
import Categoria1 from "./components/Categoria1"
import Item from "./components/Item"
import Detalle from "./components/Detalle"

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria" element={<Categoria />} />
        <Route path="/categoria-1" element={<Categoria1 />} />
        <Route path="/item" element={<Item />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>
    </>
  )
}

export default App
