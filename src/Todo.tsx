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
    <li
      className={`list-group-item ${
        todo.isCompleted ? 'list-group-item-success' : ''
      }`}
    >
      {todo.text}

      <div>
        <button className="btn btn-primary" onClick={() => completeTodo(index)}>
          Complete
        </button>
        <button className="btn btn-danger" onClick={() => removeTodo(index)}>
          x
        </button>
      </div>
    </li>
  );
};

export default Todo;
