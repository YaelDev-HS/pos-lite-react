import { ProductsListApp } from "@/products/components/ProductsListApp";
import type { Product } from "@/products/interfaces/product.interface";
import { useEffect, useState } from "react";





export default function HomePageApp() {
    const [products, setProducts] = useState<Product[] | undefined>(undefined);

    useEffect(() => {
        // Simulando una llamada a la API

        setTimeout(() => {
            setProducts([
                { id: 1, name: "Product 1", price: 10, stock: 10 },
                { id: 2, name: "Product 2", price: 20, stock: 20 },
                { id: 3, name: "Product 3", price: 30, stock: 30 },
            ]);
        }, 2000);
    }, []);

    return (
        <>
            <h1 className="text-center text-3xl font-medium text-blue-600 my-12">Agrega productos a tu inventario</h1>

            {
                products ? (
                    <ProductsListApp products={products} />
                ) : (
                    <p className="text-center text-xl font-medium text-green-600">Cargando inventario...</p>
                )
            }
        </>
    )
}

