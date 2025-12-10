import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type React from "react";
import { useState } from "react";


export default function LoginPageApp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!isValidForm()) return;

        console.log({ username, password });
    }

    function isValidForm(): boolean {
        return username.trim().length > 0 && password.trim().length > 0;
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto my-44 bg-white p-4 rounded-md shadow-lg">
                <div className="text-center py-2">
                    <h2 className="font-medium text-2xl">Inicia sesion</h2>
                    <p className="text-sm">Bienvenido al punto de venta</p>
                </div>

                <div className="flex flex-col gap-5 my-6">
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="user" className="text-gray-600">Usuario</Label>
                        <Input value={username} type="text" id="user" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
                        {ValidationError("Ingresa un usuario correcto")}
                    </div>

                    <div className="flex flex-col gap-1">
                        <Label htmlFor="password" className="text-gray-600">Contraseña</Label>
                        <Input value={password} id="password" type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>

                {ValidationError("Ocurrio un error inesperado, intenta de nuevo mas tarde.")}

                <div className="flex justify-center">
                    <Button disabled={!isValidForm()} className="bg-blue-600 text-white hover:opacity-80 transition-all duration-200">Iniciar sesion</Button>
                </div>
            </form>
        </>
    )
}

export function ValidationError(message: string) {
    return (
        <>
            <div className="bg-red-500 text-center text-sm text-white rounded-md px-2 py-1 w-full my-1">{message}</div>
        </>
    )
}
