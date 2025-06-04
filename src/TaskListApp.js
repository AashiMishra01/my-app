// TaskListApp.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTasks } from './TaskContext';

function TaskListApp() {
  const { tasks } = useTasks();
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>👋 Welcome to Your Task Manager</h1>
      <h3>📅 Today's Tasks</h3>
      {tasks.length === 0 ? <p>All tasks done!</p> : (
        <ul style={styles.ul}>
          {tasks.map(task => (
            <li key={task.id} style={styles.li}>
              {task.name}
            </li>
          ))}
        </ul>
      )}
      <button style={styles.edit} onClick={() => navigate('/tasks/edit')}>Edit Tasks</button>
    </div>
  );
}

const styles = {
  container: { width: "400px", margin: "20px auto", fontFamily: "Arial" },
  ul: { listStyle: "none", padding: 0 },
  li: {
    background: "#f0f0f0", marginBottom: "10px", padding: "10px",
    borderRadius: "6px", display: "flex", justifyContent: "space-between"
  },
  edit: {
    marginTop: "20px", padding: "10px 15px", background: "#3498db",
    color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer"
  }
};

export default TaskListApp;

