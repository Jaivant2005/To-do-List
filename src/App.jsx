import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import TaskList from './Pages/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('taskList');
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const handleEdit = (updatedTask) => {
    setTasks(prev =>
      prev.map(task => (task.id === updatedTask.id ? updatedTask : task))
    );
  };
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', backgroundColor:"palegreen" }}>
        <Link to="/">Add Task</Link> | <Link to="/tasks">View Tasks</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
        <Route path="/tasks" element={<TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
