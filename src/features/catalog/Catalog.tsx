import { Product } from "../../app/models/product";

interface Props {
    products: Product[];
    addProducts: () => void;
}

/* :any autorise tous les types
   Il faut préciser le type en raison du "strict mode" de TypeScript*/
/* A la place de ...function Catalog(props: Props), on peut "déstructurer"
   Ca évite d'utiliser "props.products" ou "props.addProducts" => devient "products" et "addProducts" */
export default function Catalog({products, addProducts}: Props) {
    /* <> est l'équivalent de <Fragment> */
    return (
        <>
        <h1>Catalog</h1>
        <ul>
        {products.map((product:any) => 
            <li key={product.id}>{product.name} #{product.id} ({product.category} - {product.editor}) : "{product.shortDescription}"</li>
            )}
      </ul>
      <button onClick={addProducts}>Ajouter un jeu</button>
      </>
    )
}