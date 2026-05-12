import RenderInput from "./RenderInput";
import RenderSelector from "./RenderSelector";

function RenderForm({handleSubmit}) {
    const inputs = [
        { type: "text", name: "titulo", label: "Título de la entrada", required: true },
        { type: "text", name: "contenido", label: "Contenido", required: true }
    ];
    const selector = {
        name: "tema",
        label: "Tipo de la entrada",
        values: ["noticia", "relato", "otro"]
    };

    return (
        <div className="card">
            <div className="card-body">
               <form onSubmit={handleSubmit}>
                    {inputs.map(input => (
                        <RenderInput key={input.name} {...input} />
                    ))}
                    <RenderSelector
                        name={selector.name}
                        label={selector.label}
                        values={selector.values}
                    />
                </form> 
            </div>
        </div>
    );
}

export default RenderForm;