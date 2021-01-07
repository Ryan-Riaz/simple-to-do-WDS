import Todo from "./Todo";

const TodoList = ({ todos, toggleToDO }) => {
    return (
        <div>
            {todos.map((todo, index) => (
                <Todo key={todo.id} todo={todo} toggleToDO={toggleToDO} />
            ))}
        </div>
    );
};

export default TodoList;
