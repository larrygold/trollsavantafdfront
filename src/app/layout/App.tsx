import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      fetch('http://localhost:7071/api/GetAllProducts')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, []);

    function addProducts() {
      const ids = products.map(product => product.id);
      setProducts(prevState => [...prevState,
        {id: Math.max.apply(null, ids) + 1, name: 'Produit', shortDescription: 'Short desc', category: 'One category', editor: 'One editor'}]);
    }

  return (
    <div>
      <h1 style={{color: 'green'}}>Le Troll Savant</h1>
      <Catalog products={products} addProducts={addProducts} />
    </div>
  );
}

export default App;
