import { useState } from 'react';

function TaskForm({ onAdd }) {
  const [form, setForm] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.description) {
      onAdd({ ...form, id: Date.now() });
      setForm({ title: '', description: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Task Title" /><br></br><br></br>
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" /><br></br><br></br>
      <button type="submit">Add Task</button>
    </form>
  );
}
export default TaskForm;
