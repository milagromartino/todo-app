import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();
function TodoProvider({ children }) {
    //El hook useState retorna una array con dos posiciones, el primero valor del estado y el segundo su actualizador (por convención empieza por set).
    //item:todos -> asi se reemplaza el nombre de una variable
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    //console.log('Se buscan todos de ' + searchValue);

    //devolvera todo a booleano con la doble negación
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();

            return todoText.includes(searchText);
        }
    );

    //marca como completado todos las tareas
    const todoCompleted = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    //elimina las tareas
    const todoDeleted = (text) => {
        const newTodos = todos.filter((todo) => todo.text !== text);
        saveTodos(newTodos);
    };

    //agrega las tareas

    const addTodo = (text) => {
        saveTodos();
        const newTodos = [...todos];
        newTodos.push({
            text, 
            completed: false
        });
        saveTodos(newTodos);
    };
    return (
        //todo lo que este en value, es lo que se expondra a nivel global
        < TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            todoCompleted,
            todoDeleted,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider >
    );

}



export { TodoContext, TodoProvider };