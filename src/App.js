import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [items, setItems] = useState([]);
  console.log(items);

  function AddTodo(newTodo) {
    setItems([...items, newTodo]);
  }

  function handleTodo(itemToRemove) {
    setItems(items.filter((item) => item !== itemToRemove));
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className="todoDiv">
          <h1>Afazeres</h1>
          <Form addTodos={AddTodo} />
          <TodoList todos={items} handleTodo={handleTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
