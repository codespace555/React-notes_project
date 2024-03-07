import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodos, updateTodos } from "../features/todo/todoSlice";

function TodoItem({todo}) {
    const [todoMsg, setTodoMsg] = useState(todo.text)
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    const heandleUpdate = () => {
     
      setIsEdit(false);
    };
  return (
    <>
      <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded gap-10"
           
          >
            <div className="text-white">
              <input
                type="text"
                value={todoMsg}
                readOnly={!isEdit}
                className="outline-none bg-transparent"
                onChange={(e) => setTodoMsg(e.target.value)}
              />
            </div>
            <button
              onClick={() => dispatch(deleteTodos(todo.id))}
              className="text-white bg-gray-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              ❌
            </button>

            <button
              onClick={() => {
                if (isEdit) {
                    
                    dispatch(updateTodos(todo.id,{ ...todo, text: todo.todoMsg }));
                    heandleUpdate();
                } else setIsEdit((prev) => !prev);
              }}
              className="text-white bg-gray-500 border-0 py-1 px-4 focus:outline-none hover:bg-gray-600 rounded text-md"
            >
              {isEdit ? "🔏" : "🖊️"}
            </button>
          </li>
    </>
  )
}

export default TodoItem
