import * as React from 'react';
import { FunctionComponent } from 'react';

interface ITodo {
  text: string;
  isCompleted: boolean;
}

interface TodoProps {
  index: number;
  todo: ITodo;
  completeTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

const Todo: FunctionComponent<TodoProps> = ({
  todo,
  index,
  completeTodo,
  removeTodo,
}) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
};

export default Todo;
