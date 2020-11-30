import React, { useState } from "react";

import NewTodo from "./components/NewTodo";
import ToDoList from "./components/ToDoList";
import { Todo } from './todo.model';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos([{id: Math.random().toString(), text: text}]);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <ToDoList items={todos} />
    </div>
  );
}

export default App;
