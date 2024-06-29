import { useRef, useState } from "react";

const NoControlado = () => {

    const form = useRef(null);
    const [errors, setErrors] = useState(new Map());
    const errorsLog = new Map();

    // Usar un Map para almacenar los errores (opcional pero efectivo)
    const validateForm = (key, value) => {
        switch (key) {
            case "title":
                if (!value.trim()) {
                    console.log(value);
                    console.log("El título es obligatorio");
                    errorsLog.set("title", "El título es obligatorio");
                }
                break;
            case "description":
                if (!value.trim()) {
                    console.log(value);
                    console.log("La descripción es obligatoria");
                    errorsLog.set("description", "La descripción es obligatoria");
                }
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        // Evita que el formulario se envíe
        event.preventDefault();
        // Obtiene los datos del formulario
        const data = new FormData(form.current);    
        const dataForm = [...data.entries()];        
        // Valida los datos del formulario
        dataForm.map(([key, value]) => {            
            validateForm(key, value);
        });
        setErrors(errorsLog);
        // Envía los datos del formulario
        const { title, description, state } = Object.fromEntries(data);
        console.log({ title, description, state });
    };

    /* document.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("Enviando formulario");
    }); */

    return (
        <form onSubmit= { handleSubmit } ref={ form }>
            <input
                name="title" // El name es importante en este caso, ya que se usa para obtener el valor del campo
                type="text"
                placeholder="Ingrese Todo"
                className="form-control mb-2"
            />
            {errors.get("title") && <p>{errors.get("title")}</p>}
            <textarea
                name="description" // El name es importante en este caso, ya que se usa para obtener el valor del campo
                className="form-control mb-2"
                placeholder="Ingrese descripción"
            />
            {errors.get("description") && <p>{errors.get("description")}</p>}
            <select name="state" className="form-select mb-2">
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">
                Procesar
            </button>
        </form>
    );
};

export default NoControlado;
