import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    deleteTodos: (state, action) => {
      state.todos = state.todos.filter(
        (item) => item.id !== action.payload
      );
    },
    updateTodos: (state, action) => {
      let index = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todos[index] = { ...state.todos[index], ...action.payload };
    },
  },
});

export const {addTodos,deleteTodos,updateTodos} = todoSlice.actions;

export default todoSlice.reducer