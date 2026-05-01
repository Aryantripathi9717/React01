import { useSelector, useDispatch } from "react-redux";
import { addtodo, deletetodo, toggletodo } from "../redux/action";
import { useState } from "react";

function Todo() {
  const [text, setText] = useState("");
  
  const todos = useSelector((state) => state.todos); // ✅ correct
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === "") return; // ✅ prevent empty todo
    dispatch(addtodo(text));
    setText(""); // ✅ clear input
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAdd}>Add Todo</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <span
            onClick={() => dispatch(toggletodo(todo.id))}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>

          <button onClick={() => dispatch(deletetodo(todo.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;