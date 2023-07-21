import './CreateButton.css';

function CreateButton({ setOpenModal }) {
    return (
        <button
            className="CreateTodoButton"
            onClick={
                () => {
                    setOpenModal(state => !state);
                }
            }
        >+</button>
    );
}

export { CreateButton };