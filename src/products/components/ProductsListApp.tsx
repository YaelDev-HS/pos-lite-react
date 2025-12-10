import type { Product } from "../interfaces/product.interface";
import ProductApp from "./ProductApp";

interface Props {
    products: Product[];
    handleDelete: (id: number) => void;
    handleEdit: (id: number) => void;
}


export function ProductsListApp({ products, handleDelete, handleEdit }: Props) {

    return (
        <>
            <h2 className="text-center text-2xl font-bold text-indigo-600 bg-gray-100">Tu lista de productos</h2>

            {
                products.length > 0 ? (
                    <ul className="max-w-xl mx-auto px-2 py-4 space-y-2">
                        {products.map(product => (
                            <ProductApp
                                product={product}
                                key={product.id}
                                handleDelete={handleDelete} handleEdit={handleEdit}
                            />
                        ))}
                    </ul>
                ) : <div className="text-center text-xl font-medium text-gray-600 my-4">No hay productos disponibles</div>
            }
        </>
    )
}