// TodoApp.jsx
import React from 'react';
import './TodoApp.css';
import { useSelector, useDispatch } from 'react-redux';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';
import { addTodo, deleteTodo, toggleTodo } from './store/todosSlice';

export const TodoApp = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (desc) => {
    if (desc.trim().length === 0) return;
    const newTodo = {
      id: new Date().getTime(),
      desc,
      done: false,
    };
    dispatch(addTodo(newTodo));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const countTodos = () => todos.length;
  const countPendingTodos = () => todos.filter(todo => !todo.done).length;

  return (
    <div>
      <h1>
        TodoApp: <small>Total: {countTodos()} - Pendientes: {countPendingTodos()}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoForm handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
