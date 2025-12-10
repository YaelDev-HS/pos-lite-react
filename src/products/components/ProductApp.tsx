import { Button } from "@/components/ui/button";
import type { Product } from "../interfaces/product.interface"

interface Props {
    product: Product;
    handleDelete: (id: number) => void;
    handleEdit: (id: number) => void;
}



export default function ProductApp({ product, handleDelete, handleEdit }: Props) {

    return (
        <li className="w-full p-2 rounded-md shadow-lg bg-white">
            <h4 className="text-center text-lg font-medium text-gray-600">{product.name}</h4>
            <p className="text-center text-2xl font-medium text-gray-600 my-2">${product.price}</p>

            <p className="text-center text-lg font-medium text-gray-600">Stock: {product.stock}</p>

            <div className="flex justify-center mt-4 items-center gap-2">
                <Button variant="destructive" onClick={() => handleDelete(product.id)}>Eliminar</Button>
                <Button onClick={() => handleEdit(product.id)}>Editar</Button>
            </div>
        </li>
    )
}

