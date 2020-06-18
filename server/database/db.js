const pgp = require('pg-promise')();
const connectString = 'postgres://localhost:5432/reddit_clone';
const db = pgp(connectString);

module.exports = db;