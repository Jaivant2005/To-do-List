import TaskForm from './TaskForm';

function Home({ tasks, setTasks }) {
  const addTask = (task) => {
    setTasks(prev => [...prev, task]);
  };

  return (
    <div className="form-container">
      <h2 style={{color:"orangered"}}>Add New Task</h2>
      <TaskForm onAdd={addTask} />
    </div>
  );
}

export default Home;
