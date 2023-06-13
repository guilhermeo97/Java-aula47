import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import UpdateTask from './components/UpdateTask';
import TaskHeader from './components/TaskHeader';

export default function App() {
  return (
    <BrowserRouter>
      <TaskHeader />
      <Routes>
        <Route index element={<TaskList />}></Route>
        <Route path='/' element={<TaskList />}></Route>
        <Route path='/new' element={<CreateTask />}></Route>
        <Route path='/:id' element={<UpdateTask />}></Route>
        <Route path='/teste' element={<h1>Teste</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
