import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Todo from './todo-item';
import './todo.scss';
import { addTask } from '../../services/taskService';
import { useAuth } from '../../hooks/useAuth';
import { Task } from '../../types/task';

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const category = location.state?.category || 'Uncategorized';
    setSelectedCategory(category);
  }, [location.state]);

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user && newTaskTitle.trim()) {
      const newTask: Task = {
        title: newTaskTitle,
        description: '',
        completed: false,
        userId: user.uid,
        createdAt: new Date(),
        category: selectedCategory,
      };
      await addTask(newTask);
      setNewTaskTitle('');
    }
  };

  return (
    <div className='todo-list'>
      <div className='todo-container'>
        <h1>{selectedCategory} Tasks</h1>
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Enter new task"
          />
          <button type="submit">Add Task</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
