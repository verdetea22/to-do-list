import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} setTodos={setTodos} todos={todos} />
      ))}
    </div>
  );
};

export default TodoList;
