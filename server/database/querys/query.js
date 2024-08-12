import connection from "../connection/db.js";

const getAllUsers = () => {
    connection.query('SELECT * FROM personas') 
    return connection.query(query);
}

const getUserById = (id) => {
    const query = connection.query('SELECT * FROM personas WHERE id = ?');
    return connection.query(query, [id]);
}

const createUser = (user) => {
    const query = connection.query('INSERT INTO personas SET ?');
    return connection.query(query, [user]);}

const updateUser = (user, id) => {
    const query = connection.query('UPDATE personas SET ? WHERE id = ?');
    return connection.query(query, [user, id]);
}

const deleteUser = (id) => {
    const query = connection.query('DELETE FROM personas WHERE id = ?');
    return connection.query(query, [id]);
}


export default {getAllUsers, getUserById, createUser, updateUser, deleteUser};