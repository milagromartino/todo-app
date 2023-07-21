import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateButton } from '../CreateButton';
import { TodoItem } from '../TodoItem';
import { TodoLoading } from '../TodoLoading';
import { TodosError } from '../TodosError';
import { TodoEmpty } from '../TodoEmpty';
import React from 'react';
import './loader.css';
import './error.css';
import './empty.css';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';


//todocontext.consumer -> //render functions, esperan funciones, en este caso recibe una funcion, y las props de los componentes
function AppUI() {
    const {
        searchedTodos,
        todoCompleted,
        todoDeleted,
        loading,
        error,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && (<> <TodoLoading /> <TodoLoading /> <TodoLoading /> </>)}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <TodoEmpty />}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        // se encapsula la funcion, functionception 
                        onComplete={() => todoCompleted(todo.text)}
                        onDelete={() => todoDeleted(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateButton setOpenModal={setOpenModal} />
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </React.Fragment>
    );
}

export { AppUI };