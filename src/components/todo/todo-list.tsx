import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Todo from './todo-item';
import './todo.scss';
import { addTask, getUserTasks, deleteTask, updateTask, getUserTasksRealtime } from '../../services/taskService';
import { useAuth } from '../../hooks/useAuth';
import { Task } from '../../types/task';

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const category = location.state?.category || 'Uncategorized';
    setSelectedCategory(category);
  }, [location.state]);

  useEffect(() => {
    const fetchTasks = async () => {
      if (user) {
        try {
          const tasks = await getUserTasks(user.uid);
          setTodos(tasks);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      }
    };

    fetchTasks();
  }, [user]);


  useEffect(() => {
    let unsubscribe: () => void;
    if (user) {
      unsubscribe = getUserTasksRealtime(user.uid, setTodos);
    }
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user]);

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user && newTaskTitle.trim()) {
      const newTask: Omit<Task, "id"> = {
        title: newTaskTitle,
        description: '',
        completed: false,
        userId: user.uid,
        createdAt: new Date(),
        category: selectedCategory,
      };
  
      try {
        const taskId = await addTask(newTask);
  
        setTodos([...todos, { ...newTask, id: taskId }]);
        setNewTaskTitle('');
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };
  



  const handleToggleComplete = async (task: Task) => {
    await updateTask(task.id!, { completed: !task.completed });
  };
  const filteredTasks = selectedCategory
    ? todos.filter((task) => task.category === selectedCategory)
    : todos;
  if (!user) {
    return <div>Please log in to view tasks.</div>;
  }

  const handleDeleteTask = async (taskId: string) => {
    await deleteTask(taskId);
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
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task)}
            />
            {task.title}
            <button onClick={() => handleDeleteTask(task.id!)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ToDoList;