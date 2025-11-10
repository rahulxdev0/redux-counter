import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: 1, text: "Sample Todo" }];

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice;
