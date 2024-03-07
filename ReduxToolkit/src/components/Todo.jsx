
import {  useSelector } from "react-redux";

import TodoItem from "./TodoItem";

function Todo() {
  const todos = useSelector((state) => state.todos);
 

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
       
        {todos.map((todo) => (
             <div key={todo.id}>
          <TodoItem todo={todo} />
          </div>
        ))}
      </ul>
    </>
  );
}

export default Todo;
