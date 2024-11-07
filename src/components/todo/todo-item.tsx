import React, { useState } from 'react';
import './todo.scss';

type TodoProps = {
  addTodo: (todo: string) => void;
  todos: string[];
};

const Todo: React.FC<TodoProps> = ({ addTodo, todos }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '' && !todos.includes(newTodo.trim())) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className='todo-item'>
      <input
        type='text'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Enter new todo'
      />
      <button onClick={handleAddTodo} disabled={newTodo.trim() === '' || todos.includes(newTodo.trim())}>
        Add Todo
      </button>
    </div>
  );
};

export default Todo;