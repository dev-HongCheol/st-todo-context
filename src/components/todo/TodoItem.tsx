import React, { useContext } from 'react';
import todoItemCss from './TodoItem.module.css';
import { TodoContext } from '../../store/TodoContext';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type TodoItemProps = {
  todo: Todo;
};

const handleToggleCompleted = (id: number) => {};

const TodoItem = ({ todo }: TodoItemProps) => {
  const todoCtx = useContext(TodoContext);

  return (
    <div className={todoItemCss['todo-item']}>
      <div>id: {todo.id}</div>
      <div>title: {todo.title}</div>
      <div>
        <button onClick={() => handleToggleCompleted(todo.id)}>{todo.completed}</button>
      </div>
    </div>
  );
};

export default TodoItem;
