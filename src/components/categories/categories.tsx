import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './categories.scss';

const TodoCategories: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCategories = localStorage.getItem('categories');
    if (storedCategories) {
      setCategories(JSON.parse(storedCategories));
    }
  }, []);

  const handleAddCategory = () => {
    if (newCategory.trim() !== '' && !categories.includes(newCategory.trim())) {
      const updatedCategories = [...categories, newCategory];
      setCategories(updatedCategories);
      localStorage.setItem('categories', JSON.stringify(updatedCategories));
      setNewCategory('');
      setIsModalOpen(false);
    }
  };

  const handleRemoveCategory = (categoryToRemove: string) => {
    const updatedCategories = categories.filter(category => category !== categoryToRemove);
    setCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
  };

  const handleCategoryClick = (category: string) => {
    navigate('/todo-list', { state: { category } });
  };

  return (
    <div className='todo-categories'>
      <h1>Categories</h1>
      <button onClick={() => setIsModalOpen(true)}>Add Category</button>
      {isModalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <h2>Add New Category</h2>
            <input
              type='text'
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder='Enter new category'
            />
            <button onClick={handleAddCategory} disabled={newCategory.trim() === ''}>
              Add Category
            </button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <span onClick={() => handleCategoryClick(category)}>{category}</span>
            <button onClick={() => handleRemoveCategory(category)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoCategories;