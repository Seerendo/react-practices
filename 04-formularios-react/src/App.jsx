import { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Todos from './components/Todos';

// Se obtienen los TODOs del localStorage
const initialStateTodo = JSON.parse(window.localStorage.getItem('todos')) || [];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodo);

  // Se guarda en el localStorage cada vez que se actualiza el estado de los TODOs
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    /* setTodos((prev) => [...prev, todo]); */ // Se puede hacer de esta forma también
    setTodos([...todos, todo]);
  };

  // Eliminar un TODO
  const deleteTodo = (id) => {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
  };

  // Actualizar el estado de un TODO
  const updateTodo = (id) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        todo.state = !todo.state;
      }
      return todo;
    });

    setTodos(newArray);
  };

  // Ordenar los TODOs por prioridad
  const orderTodos = (todos) => {
    return todos.sort((a, b) => {
      // Si la prioridad de a es igual a la de b, se retorna 0, osea, no se cambian de lugar
      if (a.priority === b.priority) return 0;
      // Si la prioridad de a es falsa, se retorna -1, osea, se cambian de lugar
      if (a.priority) return -1;
      // Si la prioridad de a es verdadera, se retorna 1, osea, no se cambian de lugar
      if (!a.priority) return 1;
    });
  };

  return (
    <div className="container mb-2">
      <h1 className="mb-5">Formularios</h1>
      <Formulario addTodo={addTodo} />
      <Todos
        todos={orderTodos(todos)}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default App;
