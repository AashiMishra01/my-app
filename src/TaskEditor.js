import React from 'react';
import { useTasks } from './TaskContext';
import { useNavigate } from 'react-router-dom';

function TaskEditor() {
  const { tasks, deleteTask } = useTasks();
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>✏️ Edit Your Tasks</h2>
      {tasks.length === 0 ? <p>No tasks available.</p> : (
        <ul style={styles.ul}>
          {tasks.map(task => (
            <li key={task.id} style={styles.li}>
              {task.name}
              <button style={styles.delete} onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <button style={styles.back} onClick={() => navigate('/tasks')}>← Back to Home</button>
    </div>
  );
}

const styles = {
  container: { width: "400px", margin: "20px auto", fontFamily: "Arial" },
  ul: { listStyle: "none", padding: 0 },
  li: {
    background: "#fff", padding: "10px", marginBottom: "10px",
    borderRadius: "6px", display: "flex", justifyContent: "space-between",
    border: "1px solid #ddd"
  },
  delete: {
    background: "#e74c3c", color: "white", border: "none",
    padding: "5px 10px", borderRadius: "4px", cursor: "pointer"
  },
  back: {
    marginTop: "20px", padding: "8px 14px", background: "#2ecc71",
    color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer"
  }
};

export default TaskEditor;
