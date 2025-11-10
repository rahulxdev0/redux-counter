import React, { Children, createContext, useContext, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  function addTodo(todoText) {
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };
    setTodo([...todo, newTodo]);
  }

  function deteleTodo(id) {
    const updatedTodos = todo.filter((item) => item.id !== id);
    setTodo(updatedTodos);
  }

  return (
    <>
        <TodoContext value={{ todo, addTodo, deteleTodo }}>{children}</TodoContext>
        <div className="" datatype="ye" data-testid="todo-list"></div>
    </>
  );
};

export const useTodo = () => useContext(TodoContext);
export default TodoProvider;