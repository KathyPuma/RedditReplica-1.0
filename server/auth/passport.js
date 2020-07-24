const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { comparePasswords } = require('../auth/helpers');
const usersQueries = require('../queries/users');


passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password', passReqToCallback: true }, async (request, email, password, done) => {

  try {
    const user = await usersQueries.getUserByEmail(email);

    if (!user) {
      return done(null, false);
    }

    const userPassword = user.password;
    const passMatch = await comparePasswords(password, userPassword);
    if (!passMatch) {
      return done(null, false)
    };
    delete userPassword;
    done(null, user);
  }
  catch (err) {
    done(err);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user)
});

passport.deserializeUser(async (user, done) => {
  try {
    let retrievedUser = await usersQueries.getUserByEmail(user.email);
    delete retrievedUser.password;
    done(null, retrievedUser)
  }
  catch (err) {
    done(err, false)
  }
});

module.exports = passport;