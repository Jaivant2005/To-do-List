import { useState } from 'react';
import Taskcard from './Taskcard';

function TaskList({ tasks, onDelete, onEdit }) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', description: '' });

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditForm({ title: task.title, description: task.description });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const submitEdit = (id) => {
    if (editForm.title && editForm.description) {
      onEdit({ ...editForm, id });
      setEditingId(null);
    }
  };

  if (tasks.length === 0) return <p style={{color:"orangered",backgroundColor:"lightskyblue"}}>No tasks available.</p>;

  return (
    <div className="task-list-container">
      {tasks.map(task => (
        <div key={task.id} className="task-item">
          {editingId === task.id ? (
            <div>
              <input name="title" value={editForm.title} onChange={handleEditChange} placeholder="Title" />
              <input name="description" value={editForm.description} onChange={handleEditChange} placeholder="Description" />
              <button onClick={() => submitEdit(task.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </div>
          ) : (
            <>
              <Taskcard task={task} />
              <button onClick={() => startEdit(task)}>Edit</button>
              <button onClick={() => onDelete(task.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
