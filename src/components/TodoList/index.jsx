import "./styles.css";

function TodoList({ todos, handleTodo }) {
  return (
    <div className="inputParent">
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <h3>{item}</h3>
            <button onClick={() => handleTodo(item)} className="removeItem">
              Concluído
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
