import FieldError from "@/components/shared/FieldError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { FormProvider, useForm } from "react-hook-form";
import type { Product } from "../interfaces/product.interface";



interface Props {
    createProduct: (product: Product) => void;
}


export default function CreateProductApp({ createProduct }: Props) {
    const methods = useForm<Product>();

    const onSubmit = methods.handleSubmit(data => {
        data.id = Date.now();
        createProduct(data);
        resetForm();
    })

    function resetForm() {
        methods.reset();
    }

    return (
        <>
            <h2 className="text-center text-2xl font-bold text-green-600 bg-gray-100">Agregar nuevo producto</h2>

            {/* dejamos que react-hook-form acceda al contexto de los Inputs del formulario */}
            <FormProvider {...methods}>
                <form
                    noValidate
                    className="flex flex-col gap-4 max-w-lg mx-auto px-2 py-4 bg-white shadow-md rounded-sm my-4"
                    onSubmit={onSubmit}
                >
                    <div>
                        <Label className="text-sm px-2 text-gray-600" htmlFor="name">Nombre del producto</Label>
                        <Input
                            {...methods.register("name",
                                {
                                    required: "Este campo es obligatorio",
                                    minLength: { value: 5, message: "El nombre debe tener al menos 5 caracteres" },
                                    maxLength: { value: 50, message: "El nombre debe tener menos de 50 caracteres" }
                                }
                            )}
                            placeholder="Nombre del producto" id="name"
                        />
                        <FieldError error={methods.formState.errors.name?.message?.toString()} />
                    </div>

                    <div>
                        <Label className="text-sm px-2 text-gray-600" htmlFor="stock">En stock</Label>
                        <Input
                            {...methods.register("stock", {
                                required: "Este campo es obligatorio",
                                min: { value: 0, message: "El stock debe ser mayor a 0" },
                            })}
                            type="number"
                            placeholder="En stock" id="stock"
                        />
                        <FieldError error={methods.formState.errors.stock?.message?.toString()} />
                    </div>

                    <div>
                        <Label className="text-sm px-2 text-gray-600" htmlFor="price">Precio del producto</Label>
                        <div className="flex gap-1 items-center">
                            <div>$</div>
                            <Input
                                {...methods.register("price", {
                                    required: "Este campo es obligatorio",
                                    min: { value: 1, message: "El precio debe ser mayor a 1" },
                                })}
                                type="number"
                                placeholder="Precio del producto"
                                id="price"
                            />
                        </div>
                        <FieldError error={methods.formState.errors.price?.message?.toString()} />
                    </div>

                    <div className="flex justify-center">
                        <Button type="submit">Agregar</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

