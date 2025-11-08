// Recibe la prop "greeting" (requisito)
function ItemListContainer({ greeting }) {
  return (
    <section className="p-4 bg-light rounded-3">
      <h1 className="h4 mb-2">Inicio</h1>
      <p className="mb-0">{greeting}</p>
    </section>
  )
}

export default ItemListContainer
