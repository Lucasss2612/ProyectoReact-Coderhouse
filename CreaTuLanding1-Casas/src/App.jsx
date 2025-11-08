import NavBar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

function App() {
  return (
    <>
      <NavBar />
      <main className="container py-4">
        <ItemListContainer greeting="¡Bienvenido/a a Imprimagic Store! Pronto vas a ver nuestro catálogo 😉" />
      </main>
    </>
  )
}

export default App
