DROP DATABASE if exists reddit_clone;
CREATE DATABASE reddit_clone;

\c reddit_clone



CREATE TABLE users(
   user_id SERIAL PRIMARY KEY,
   username VARCHAR NOT NULL,
   password VARCHAR NOT NULL,
   avatar_url TEXT DEFAULT '',
);


CREATE TABLE posts(
    post_id  SERIAL PRIMARY KEY,
    poster_id  INT REFERENCES users(user_id) ,
    time_post text DEFAULT NOW()

);


CREATE TABLE comments(
   comment_id SERIAL PRIMARY KEY,
   commenter_id INT REFERENCES users(user_id),
   post_id INT REFERENCES posts(post_id),
   body TEXT,
   comment_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE photos(
    photo_id SERIAL PRIMARY KEY,
    photo_url TEXT NOT NULL,
    user_id INT REFERENCES users(user_id) 
);


-- CREATE TABLE votes(
--     vote_id SERIAL PRIMARY KEY,

-- );


-- CREATE TABLE upvotes(
--    upvote_id SERIAL PRIMARY KEY,
 
-- );

-- CREATE TABLE downvotes(
--    downvote_id SERIAL PRIMARY KEY,

-- );


-- CREATE TABLE messages(
--    message_id SERIAL PRIMARY KEY,
  
-- );