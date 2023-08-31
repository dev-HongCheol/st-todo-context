import { Outlet } from 'react-router-dom';
import Header from './Header';
import TodoContextProvicer from '../store/TodoContext';

const Layout = () => {
  return (
    <TodoContextProvicer>
      <Header />
      {<Outlet />}
    </TodoContextProvicer>
  );
};

export default Layout;
