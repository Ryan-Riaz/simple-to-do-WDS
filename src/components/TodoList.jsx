import Todo from "./Todo";

// toggleToDo is from ./app is called props drilling
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
