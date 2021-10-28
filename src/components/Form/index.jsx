import "../TodoList/styles.css";
import { useState } from "react";

function Form({ addTodos }) {
  const [userInput, setUserInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          placeholder="Nova tarefa"
        ></input>
        <button
          onClick={() => addTodos(userInput)}
          type="submit"
          className="addItem"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default Form;
