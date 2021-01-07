const Todo = ({ todo, toggleToDO }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => toggleToDO(todo.id)}
            />
            <span
                style={
                    todo.complete
                        ? { textDecoration: "line-through" }
                        : { textDecoration: "none" }
                }
            >
                {todo.name}
            </span>
        </div>
    );
};

export default Todo;
