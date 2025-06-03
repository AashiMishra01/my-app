// TodoDemo.js
import React, { useState } from 'react';

// Todo item with checkbox and delete button
function TodoItem({ todo, index, onToggleComplete, onDelete }) {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #ddd',
        backgroundColor: todo.completed ? '#e0ffe0' : '#fff',
        transition: 'background-color 0.3s',
      }}
    >
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(index)}
          style={{ marginRight: '10px' }}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => onDelete(index)} style={deleteButtonStyle}>❌</button>
    </li>
  );
}

function TodoList({ todos, onToggleComplete, onDelete }) {
  return (
    <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
      {todos.map((todo, idx) => (
        <TodoItem
          key={idx}
          todo={todo}
          index={idx}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo..."
        style={inputStyle}
      />
      <button type="submit" style={addButtonStyle}>Add</button>
    </form>
  );
}

function TodoDemo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    const updated = [...todos];
    updated.splice(index, 1);
    setTodos(updated);
  };

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>📝 Todo List</h2>
      <p>{completed} / {total} completed</p>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onToggleComplete={toggleComplete} onDelete={deleteTodo} />
    </div>
  );
}

export default TodoDemo;

// 🖌️ Styles
const containerStyle = {
  padding: '30px',
  maxWidth: '500px',
  margin: 'auto',
  background: '#f9f9f9',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  marginTop: '40px',
};

const headerStyle = {
  textAlign: 'center',
  fontSize: '28px',
  marginBottom: '10px',
};

const inputStyle = {
  flex: 1,
  padding: '10px',
  fontSize: '16px',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const addButtonStyle = {
  padding: '10px 16px',
  fontSize: '16px',
  borderRadius: '6px',
  backgroundColor: 'pink',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

const deleteButtonStyle = {
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  fontSize: '18px',
  color: '#cc0000',
};

