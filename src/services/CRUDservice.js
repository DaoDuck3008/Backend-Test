const connection = require('../config/database');

const getAllUsers = async () => {
    const [results,fields] = await connection.query(`SELECT * FROM Users`);
    return results;
}

const getEditUser = async (userId) => {
    const [results,fields] = await connection.query(`SELECT * FROM Users WHERE id = ?`, [userId]);
    return results && results.length > 0 ? results[0] : {};
}

const updateUser = async (email, name, city,id) => {
    const [results,fields] = await connection.query(
        `UPDATE Users 
        SET email = ?, name = ?, city = ?
        WHERE id = ?;`,
        [email,name,city,id]);
    return results;
}

module.exports = {
    getAllUsers,
    getEditUser,
    updateUser
}