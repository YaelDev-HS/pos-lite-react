import CreateProductApp from "@/products/components/CreateproductApp";
import { ProductsListApp } from "@/products/components/ProductsListApp";
import type { Product } from "@/products/interfaces/product.interface";
import { useEffect, useState } from "react";





export default function HomePageApp() {
    const [products, setProducts] = useState<Product[] | undefined>(undefined);

    useEffect(() => {
        setTimeout(() => {
            setProducts([
                { id: 1, name: "Product 1", price: 10, stock: 10 },
                { id: 2, name: "Product 2", price: 20, stock: 20 },
                { id: 3, name: "Product 3", price: 30, stock: 30 },
            ]);
        }, 500);
    }, []);

    function handleDelete(id: number): void {
        if (!products) return;

        const productsFilter = products.filter(product => product.id !== id);
        setProducts(productsFilter);
    }

    function handleEdit(id: number): void {
        console.log("Editando producto ", id);
    }

    return (
        <>
            <div className=" border-b border-gray-300 mb-4 pb-2">
                <h1 className="text-center text-3xl font-medium text-blue-600 my-12">Agrega productos a tu inventario</h1>
                <CreateProductApp />
            </div>

            {
                products ? (
                    <ProductsListApp
                        products={products}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                ) : (
                    <p className="text-center text-xl font-medium text-green-600">Cargando inventario...</p>
                )
            }
        </>
    )
}

