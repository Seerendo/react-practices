import Todo from './Todo';

const Todos = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div className="mt-5">
      <h2 className="text-center">Todos</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
      {/* Si no hay TODOs, se muestra un mensaje de advertencia */}
      {todos.length === 0 && (
        <div className="alert alert-warning mt-2">No hay TODOs</div>
      )}
    </div>
  );
};

export default Todos;
