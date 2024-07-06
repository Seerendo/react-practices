import IconCross from './icons/IconCross';
import IconCheck from './icons/IconCheck';

const TodoItem = ({ todo, removeTodo, completeTodo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="flex gap-4 border-b border-gray-400">
      <button
        className={`h-5 w-5 flex-none rounded-full border-2 ${
          completed
            ? 'grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
            : 'inline-block'
        }`}
        onClick={() => completeTodo(id)}
      >
        {completed && <IconCheck />}
      </button>
      <p
        className={`${completed ? 'grow text-gray-600 line-through' : 'grow text-gray-600'}`}
      >
        {title}
      </p>
      <button onClick={() => removeTodo(id)}>
        <IconCross />
      </button>
    </article>
  );
};

export default TodoItem;
