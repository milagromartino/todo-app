import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);
    return (
        totalTodos === completedTodos ?
            <h1 className='TodoCounter'>¡Felicidades, completaste todas las tareas!🥳 </h1>
            :
            <h1 className='TodoCounter'>
                Has completado {completedTodos} de {totalTodos} tareas.
            </h1>
    );
}

export { TodoCounter };