import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

const initialTasks = [
  { id: 1, name: "Meet at 6" },
  { id: 2, name: "Prepare for interview" },
  { id: 3, name: "Update LinkedIn profile" }
];

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialTasks);

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
