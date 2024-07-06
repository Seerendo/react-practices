import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, completeTodo }) => {
  return (
    <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
