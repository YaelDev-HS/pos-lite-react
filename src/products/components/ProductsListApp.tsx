import type { Product } from "../interfaces/product.interface";

interface Props {
    products: Product[];
}


export function ProductsListApp({ products }: Props) {
    return (
        <>
            <h1>Products List</h1>

            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </>
    )
}