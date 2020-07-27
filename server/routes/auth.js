const express = require('express');
const router = express.Router();
const userQueries = require('../queries/users')
const authHelpers = require('../auth/helpers')
const passport = require('../auth/passport');
const { handleErrors } = require('../helpers/helpers')


router.post("/signup", async (req, res, next) => {
    try {
        const { username, email, password, avatar_url } = req.body
        const password_digest = await authHelpers.hashPassword(password)
        let newUser = await userQueries.addNewUser({ username: username, email: email, password: password_digest, avatar_url: avatar_url })
        res.status(200).json({
            payload: newUser,
            message: "User successfully registered",
            error: false
        })
    } catch (err) {
        handleErrors(res, err);
    }
})
router.post('/login', passport.authenticate('local'), (req, res, next) => {
    try {
        res.status(200)
            .json({
                payload: req.user,
                message: 'User sucessfully logged in.',
                error: false,
            })
    }
    catch (err) {
        throw err
    }
});

router.get("/logout", authHelpers.loginRequired, (req, res, next) => {
    req.logOut()
    res.json({
        payload: null,
        message: "User successfully logged out ",
        error: false
    })
})


router.get("/isUserLoggedIn", authHelpers.loginRequired, (req, res, next) => {
    res.json({
        payload: req.user,
        message: "User is logged in. Session active",
        error: false
    })
})

module.exports = router;