import { useState } from 'react';
import Header from './components/Header';
import TodoComputed from './components/TodoComputed';
import TodoCreate from './components/TodoCreate';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

const initialTodos = [
  {
    id: 1,
    title: 'Complete online JavaScript course',
    completed: true,
  },
  {
    id: 2,
    title: 'Jog around the park 3x',
    completed: false,
  },
  {
    id: 3,
    title: '10 minutes meditation',
    completed: false,
  },
  {
    id: 4,
    title: 'Read for 1 hour',
    completed: false,
  },
  {
    id: 5,
    title: 'Pick up groceries',
    completed: true,
  },
  {
    id: 6,
    title: 'Complete Todo App on Frontend Mentor',
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    setTodos(() => {
      const newListTodo = [...todos];
      // En este caso es para poder controlar si agregar un nuevo elemeto al final de la lista con push o al inicio con unshift
      // si requiere que solo se agregue simplemente por defecto (que esté al final de la lista) se puede usar setState([...todos, newTodo])
      newListTodo.push(newTodo);
      return newListTodo;
    });
  };

  const removeTodo = (id) => {
    const newListTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newListTodo);
  };

  const completeTodo = (id) => {
    const newListTodo = [...todos];
    newListTodo.filter((todo) => {
      if (todo.id === id) {
        return (todo.completed = !todo.completed);
      }
    });
    setTodos(newListTodo);
  };

  const clearCompleteTodo = () => {
    const newListTodo = todos.filter((todo) => todo.completed !== true);
    setTodos(newListTodo);
  };

  /* const orderCompleteTodo = () => {
    const newListTodo = [...todos];
    newListTodo.sort((a, b) => {
      if (a.completed && !b.completed) {
        return -1;
      } else if (!a.completed && b.completed) {
        return 1;
      } else {
        return 0;
      }
    });
    setTodos(newListTodo);
    console.log(newListTodo);
  }; */

  const [filter, setFilter] = useState('all');

  const changeFilter = (filter) => setFilter(filter);

  // Al recibir la funcion que es de tipo Array[] me va a recibir
  // la lista respecto al filtro con el switch incorporado
  const filteredTodos = () => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-300 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain bg-no-repeat">
        <Header />

        <main className="container mx-auto mt-8 px-4">
          <TodoCreate createTodo={(title) => createTodo(title)} />

          <TodoList
            todos={filteredTodos()}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />

          <TodoComputed
            todos={filteredTodos()}
            clearCompleteTodo={clearCompleteTodo}
          />

          <TodoFilter changeFilter={changeFilter} filter={filter} />
        </main>

        <p className="mt-8 text-center">Drag and drop to reorder list</p>
      </div>
    </>
  );
};

export default App;
