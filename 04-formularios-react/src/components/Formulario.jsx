import { useState } from 'react';
import Swal from 'sweetalert2';

const Formulario = ({ addTodo }) => {
  // Se inicializa el estado como un objeto vacío
  const [todo, setTodo] = useState({
    title: '',
    description: '',
    state: 'pendiente',
    priority: true,
  });

  const { title, description, state, priority } = todo;

  const handleSubmit = (event) => {
    // Evita que el formulario se envíe
    event.preventDefault();
    if (!title.trim() || !description.trim()) {
      // Se muestra un mensaje de error si los campos están vacíos
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Todos los campos son obligatorios',
      });
    }

    // Se agrega el TODO al momento de enviar el formulario
    addTodo({
      id: new Date().getTime(),
      ...todo,
      state: state === 'completado',
    });

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'TODO agregado con éxito',
      showConfirmButton: false,
      timer: 1500,
    }); // Se muestra un mensaje de éxito
  };

  const handleChange = (event) => {
    // Se obtienen los valores del campo mediante destructuring
    const { name, value, checked, type } = event.target;
    // Se actualiza el estado con los valores del campo
    setTodo({
      ...todo, // Una "copia" del estado actual
      [name]:
        type === 'checkbox' // Si el campo es un checkbox
          ? checked // Se obtiene el valor del checkbox
          : value, // Si no, se obtiene el valor del campo
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title" // El name es importante en este caso, ya que se usa para obtener el valor del campo
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        value={title}
        onChange={handleChange}
      />
      <textarea
        name="description" // El name es importante en este caso, ya que se usa para obtener el valor del campo
        className="form-control mb-2"
        placeholder="Ingrese descripción"
        value={description}
        onChange={handleChange}
      />
      <select
        name="state"
        className="form-select mb-2"
        value={state}
        onChange={handleChange}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <div className="form-check">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input mb-2"
          id="inputCheck"
          checked={priority} // Se asigna el valor del checkbox
          onChange={handleChange}
        />
        <label htmlFor="inputCheck" className="form-check-label mb-2">
          Dar prioridad
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar TODO
      </button>
    </form>
  );
};

export default Formulario;
