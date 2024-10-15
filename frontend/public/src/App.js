import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Fetch todos from backend on load
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get('http://localhost:3001/api/todos');
      setTodos(res.data);
    };
    fetchTodos();
  }, []);

  const handleAddTodo = async () => {
    const res = await axios.post('http://localhost:3001/api/todos', { text: newTodo });
    setTodos([...todos, res.data]);
    setNewTodo('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
