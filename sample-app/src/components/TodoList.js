import React, { useState } from 'react';

export default function TodoList() {
    const [tasks, setTasks] = useState([]); // State to hold the list of tasks
    const [newTask, setNewTask] = useState(''); // State to hold the value of the new task
  
    // Function to handle adding a new task
    const handleAddTask = () => {
      if (newTask.trim() === '') return; // Don't add empty tasks
      setTasks([...tasks, { text: newTask, isDone: false }]); // Add new task to the list
      setNewTask(''); // Reset input field
    };
  
    // Function to handle toggling the 'done' state of a task
    const handleToggleTask = (index) => {
      const updatedTasks = tasks.map((task, i) => 
        i === index ? { ...task, isDone: !task.isDone } : task
      );
      setTasks(updatedTasks);
    };
  
    return (
      <div>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Add a new task" 
        />
        <button onClick={handleAddTask}>Add</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
              <input 
                type="checkbox" 
                checked={task.isDone} 
                onChange={() => handleToggleTask(index)} 
              />
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    );    
}