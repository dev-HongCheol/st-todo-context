import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import TodoList from './components/todo/TodoList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<TodoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
