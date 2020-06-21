const db = require('../database/db')


const getAllUsers = async () => {
	const users = await db.any("SELECT * FROM users")
	return users;
}

const addNewUser = async (userObj) => {
	const newUserQuery = `
		INSERT INTO users(username, password)
			VALUES($/username/, $/password/)
			RETURNING user_id, username
	`
	const newUser = await db.one(newUserQuery, userObj)
	return newUser;
}

const getUserByUsername = async (username) => {
	const getUserQuery = 
	`SELECT * 
	FROM users
	WHERE username = $/username/;
	`;
	return await await db.oneOrNone(getUserQuery, {username})



}

module.exports = {
	getAllUsers,
	addNewUser,
	getUserByUsername
}

