import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import TodoList from "./components/TodoList";

// local storage const key
const LOCAL_STORAGE_KEY = "todo.app";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        //get from browser
        const todoStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (todoStorage) {
            setTodos(todoStorage);
        }
    }, []);

    useEffect(() => {
        // give to browser
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    // for referencing input reference
    const todoRef = useRef();

    // add todo in todo list
    const handleAddToDo = () => {
        const name = todoRef.current.value;
        if (name === "") return;
        setTodos((prevTodo) => [
            ...prevTodo,
            { id: uuid(), name: name, complete: false },
        ]);
        todoRef.current.value = null;
    };

    // remove todo from todo list
    const handleClearToDO = () => {
        const newToDos = todos.filter((todo) => !todo.complete);
        setTodos(newToDos);
    };

    // track if a todo done or not
    const toggleToDO = (id) => {
        const newToDos = [...todos];
        const todo = newToDos.find((todo) => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(newToDos);
    };

    return (
        <div className="App">
            <TodoList todos={todos} toggleToDO={toggleToDO} />
            <input type="text" ref={todoRef} />
            <button onClick={() => handleAddToDo()}> Add </button>
            <button onClick={() => handleClearToDO()}> Clear </button>
            <p>{todos.filter((todo) => !todo.complete).length} lefts to do</p>
        </div>
    );
}

export default App;
