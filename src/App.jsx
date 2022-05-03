import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const currentLength = todos.length;
    const newTodo = { id: currentLength + 1, todo };
    setTodos([...todos, newTodo]);
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
          onChange={(e) => setState(e.target.value)}
          id="new-todo"
          type="text"
          name="new-todo"
        />
        <button onClick={() => addTodo(state)}>Add</button>
      </div>

      {todos.map(({ id, todo }) => {
        return (
          <div key={id}>
            <span>{todo}</span>
            <span onClick={() => removeTodo(id)}>X</span>
          </div>
        );
      })}

      <button onClick={() => setTodos([])}>Reset</button>
    </div>
  );
}

export default App;
