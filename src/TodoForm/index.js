import React from "react";
import './TodoForm.css';
import { TodoContext } from '../TodoContext';
function TodoForm() {
    const { addTodo, setOpenModal } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    //si se da add o cancel, igual cerrará el form
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    return (
        <form onSubmit={onSubmit}>
            <label>Agrega algo nuevo para hacer</label>
            <textarea placeholder="Type something" value={newTodoValue} onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" type="button" onClick={onCancel}>
                    Cancelar
                </button>
                <button className="TodoForm-button TodoForm-button--add" type="submit">
                    Añadir
                </button>
            </div>
        </form>
    );

}

export { TodoForm };