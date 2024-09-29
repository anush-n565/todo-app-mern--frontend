import axios from 'axios';

const baseUrl = "https://todo-app-mern-backend-q4em.onrender.com";

const getAllToDo = (setTodo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('Fetched ToDos:', data);
            setTodo(data);
        })
        .catch(err => console.error('Error fetching ToDos:', err));
};

const addToDo = (text, setText, setTodo) => {
    axios
        .post(`${baseUrl}/save`, { text })
        .then((response) => {
            console.log('Add Response:', response);
            setText("");
            getAllToDo(setTodo);
        })
        .catch((err) => console.error('Error adding ToDo:', err));
};

const updateToDo = (toDoId, text, setTodo, setText, setIsUpdating) => {
    console.log(`Updating ToDo: ID = ${toDoId}, Text = ${text}`);
    axios
        .post(`${baseUrl}/update`, { _id: toDoId, text })
        .then((response) => {
            console.log('Update Response:', response);
            setText("");
            setIsUpdating(false);
            getAllToDo(setTodo);
        })
        .catch((err) => console.error('Error updating ToDo:', err));
};

const deleteToDo = (_id, setTodo) => {
    console.log(`Deleting ToDo: ID = ${_id}`);
    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((response) => {
            console.log('Delete Response:', response);
            getAllToDo(setTodo);
        })
        .catch((err) => console.error('Error deleting ToDo:', err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
