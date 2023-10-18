import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, setTodos }) {
  function onDeleteTodos() {
    const newTodoList = todos.filter(todo => todo.id !== id)


  }
  return (
    todos &&
    todos.map((todo) => (
      <Todo
        key={todo.id}
        text={todo.text}
        id={todo.id}
        isFinished={todo.isFinished}

      />
    ))
  );
}
