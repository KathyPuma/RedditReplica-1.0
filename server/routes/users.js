const express = require('express');
const router = express.Router();
const userQueries= require('../queries/users')



router.get('/', async (req, res, next) => {
  try {
    let users = await userQueries.getAllUsers()
    res.json({
      payload: users,
      message: "Retrieved all users",
      error: false
    })
  } catch (err) {
    res.status(500).json({
      payload: null,
      message: "Failed retrieving all users",
      error: true
    })
  }
});



module.exports = router;
