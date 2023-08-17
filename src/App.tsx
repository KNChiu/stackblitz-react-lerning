import * as React from 'react';
import { useState } from 'react';

import Todo from './Todo';

interface ITodo {
  text: string;
  isCompleted: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Array<ITodo>>([
    { text: 'Learn React', isCompleted: false },
    { text: 'Meet Friend for Lunch', isCompleted: false },
    { text: 'Build a todo app in react', isCompleted: false },
  ]);

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
