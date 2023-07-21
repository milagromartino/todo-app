import React from 'react';
import './TodoEmpty.css';

function TodoEmpty() {
  return (
    <div className='empty-message'>
      <p>Esto está vacio...¡Crea una tarea!</p>
    </div>
  );
}

export { TodoEmpty };