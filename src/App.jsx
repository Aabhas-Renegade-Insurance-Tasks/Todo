import { useState, useRef } from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [state, setState] = useState("");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const addTodo = (todo) => {
    const currentLength = todos.length;
    const newTodo = { id: currentLength + 1, todo };
    setTodos([...todos, newTodo]);
    inputRef.current.value = "";
  };

  const removeTodo = (id) => {
    const prevTodo = [...todos];
    const newTodos = prevTodo.filter((todo) => id != todo.id);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="new-todo">New Todo:</label>
        <input
          ref={inputRef}
          onChange={(e) => setState(e.target.value)}
          id="new-todo"
          type="text"
          name="new-todo"
        />
        <button onClick={() => addTodo(state)}>Add</button>
      </div>

      {todos.map(({ id, todo }) => {
        return (
          <div key={id} className="todo-wrapper">
            <span>{todo}</span>
            <span className="remove-wrapper" onClick={() => removeTodo(id)}>
              <i className="bi bi-x-circle"></i>
            </span>
          </div>
        );
      })}

      <button
        onClick={() => {
          setTodos([]);
          inputRef.current.value = "";
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
