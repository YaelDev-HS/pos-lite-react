


interface Props {
    error?: string;
}


export default function FieldError({ error }: Props) {
    return (
        <>
            {error && <div className="text-white my-2 bg-red-600 font-medium text-sm px-2 py-1 rounded-md text-center w-full">{error}</div>}
        </>
    )
}