const TodoComputed = ({ todos, clearCompleteTodo }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white px-4 py-4">
      <span className="text-gray-400">{todos.length} items left</span>
      <button onClick={clearCompleteTodo} className="text-gray-400">
        Clear Completed
      </button>
    </section>
  );
};

export default TodoComputed;
