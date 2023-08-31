import React from 'react';
import TodoItem, { Todo } from './TodoItem';

const TEST_TODOS: Todo[] = [
  {
    id: 1,
    title: 'test Title',
    completed: false,
  },
  {
    id: 2,
    title: 'Todo Title',
    completed: true,
  },
];

const TodoList = () => {
  return (
    <div>
      {TEST_TODOS.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
