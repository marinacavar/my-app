import React, { useState } from 'react';
import Todo from './todo-item';
import './todo.scss';

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className='todo-list'>
      <div className='todo-item'>
        <h1>My To-Do List</h1>
        <Todo addTodo={addTodo} todos={todos} />
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;