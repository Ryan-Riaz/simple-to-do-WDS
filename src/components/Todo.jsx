const Todo = ({ todo, toggleToDO }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => toggleToDO(todo.id)}
            />
            <span>{todo.name}</span>
        </div>
    );
};

export default Todo;
