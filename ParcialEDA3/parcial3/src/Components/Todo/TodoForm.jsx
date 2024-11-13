// TodoForm.jsx
import React, { useState } from 'react';

export const TodoForm = ({ handleAddTodo }) => {
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleAddTodo(description);
    setDescription('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="New Todo"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="btn btn-outline-primary mt-1" type="submit">
        Agregar
      </button>
    </form>
  );
};
