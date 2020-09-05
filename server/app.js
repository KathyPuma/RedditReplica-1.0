const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const passport = require('./auth/passport');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const subredditRouter = require('./routes/subreddit')
const votestRouter = require('./routes/votes')
const commentsRouter = require('./routes/comments')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.static(path.join(__dirname, "/public")));


app.use(session({
    secret: "NOT_A_GOOD_SECRET",
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/subreddit', subredditRouter)
app.use('/votes', votestRouter)
app.use('/comments', commentsRouter)


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = app;