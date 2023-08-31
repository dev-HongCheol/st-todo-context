import { Children, ReactElement, ReactNode, createContext, useState } from 'react';
import { Todo } from '../components/todo/TodoItem';

export type TodoCtx = {
  likeTodoList: Todo[];
  likeCount: number;
  addLike: (todo: Todo) => void;
};

export const TodoContext = createContext<TodoCtx>({
  likeTodoList: [],
  likeCount: 0,
  addLike: (todo: Todo) => {},
});

type TodoContextProvicer = {
  children: ReactNode;
};
const TodoContextProvicer = ({ children }: TodoContextProvicer) => {
  const [likeTodoList, setLikeTodoList] = useState<Todo[]>([]);
  const [likeCount, setLikeCount] = useState(likeTodoList.length);

  const addLike = (todo: Todo) => {
    setLikeTodoList((prev) => prev.concat(todo));
  };

  return (
    <TodoContext.Provider
      value={{
        likeTodoList,
        likeCount,
        addLike,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvicer;
