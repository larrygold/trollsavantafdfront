import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([
      {id: 1, name: 'Produit 1', shortDescription: 'Short desc 1'},
      {id: 2, name: 'Produit 2', shortDescription: 'Short desc 2'}
    ]);

    useEffect(() => {
      fetch('http://localhost:7071/api/GetAllProducts')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, []);

    function addProducts() {
      const ids = products.map(product => product.id);
      setProducts(prevState => [...prevState,
        {id: Math.max.apply(null, ids) + 1, name: 'Produit', shortDescription: 'Short desc'}]);
    }

  return (
    <div>
      <h1 style={{color: 'green'}}>Le Troll Savant</h1>
      <ul>
        {products.map(product => 
            <li key={product.id}>{product.name} #{product.id} : "{product.shortDescription}"</li>
            )}
      </ul>
      <button onClick={addProducts}>Ajouter un jeu</button>
    </div>
  );
}

export default App;
