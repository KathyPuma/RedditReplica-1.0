DROP DATABASE if exists reddit_replica;
CREATE DATABASE reddit_replica;

\c reddit_replica


-- DROP TABLE IF  users CASCADE; 
CREATE TABLE users(
   user_id SERIAL PRIMARY KEY,
   username VARCHAR UNIQUE NOT NULL,
   email VARCHAR NOT NULL,
   password VARCHAR NOT NULL,
   avatar_url TEXT DEFAULT ''
);

-- DROP TABLE IF exists subreddit CASCADE;
CREATE TABLE subreddit (
    subreddit_id SERIAL PRIMARY KEY,
    subreddit_name VARCHAR UNIQUE NOT NULL, 
    subreddit_description VARCHAR NOT NULL,
    subreddit_admin INT REFERENCES users(user_id), 
    subreddit_banner VARCHAR,
    subreddit_logo VARCHAR
);

-- DROP TABLE IF exists subreddit_posts CASCADE;
CREATE TABLE subreddit_posts(
    subreddit_posts_id SERIAL PRIMARY KEY,
    subreddit_id  INT REFERENCES subreddit(subreddit_id),
    poster_id INT REFERENCES users(user_id),
    title TEXT,
    body TEXT,
    photo_url VARCHAR DEFAULT '',
    time_post text DEFAULT NOW()
);

-- DROP TABLE IF exists comments CASCADE;
CREATE TABLE comments(
   comment_id SERIAL PRIMARY KEY,
    subreddit_posts INT REFERENCES subreddit_posts(subreddit_posts_id),
   commenter_id INT REFERENCES users(user_id),
   body TEXT,
   comment_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- DROP TABLE IF exists comment_replies CASCADE;
CREATE TABLE comment_replies(
   comment_replies_id SERIAL PRIMARY KEY,
   comment_id INT REFERENCES comments(comment_id),
   comment_responder_id INT REFERENCES users(user_id),
   body TEXT,
   comment_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- DROP TABLE IF exists comumunity CASCADE;
CREATE TABLE comumunity (  --subreddit_users 
    comumunity_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    subreddit_id  INT REFERENCES subreddit(subreddit_id)
);

-- DROP TABLE IF exists votes_posts CASCADE;
CREATE TABLE votes_posts(
    votes_posts_id SERIAL PRIMARY KEY,
    subreddit_posts_id INT REFERENCES subreddit_posts(subreddit_posts_id),
    voter_id INT REFERENCES users(user_id),
    votes INT 
);


INSERT INTO users
    (username, email, password,  avatar_url)
VALUES
('Ana','ana@gmail.com', 'abc123', 'img'),
('No_Information5946','brandon@gmail.org' ,'abc123', 'img'),
('Witty-Media-6475','James@gmail.org' ,'abc123', 'img'),
('randomUser1','randomUser1@gmail.org' ,'abc123', 'img'),
('Mommy-blogger','mommyOfTwo@gmail.org' ,'abc123', 'img');


INSERT INTO subreddit
    (subreddit_name, subreddit_description, subreddit_admin,subreddit_banner, subreddit_logo)
VALUES
('wholesomememes', 'Welcome to the wholesome side of the internet! This community is for those searching for a way to capture virtue on the internet.', 1, 'http://localhost:3001/images/subredditBanners/WholesomeMemesBanner.jpeg', 'http://localhost:3001/images/subredditLogos/WholesomeMemesLogo.png'),
('Movies', 'News & Discussion about Major Motion Pictures',1, 'http://localhost:3001/images/subredditBanners/MovieseBannner.png', 'http://localhost:3001/images/subredditLogos/MoviesLogo.jpeg'),
('explainlikeimfive', 'Explain Like I''m Five is the best forum and archive on the internet for layperson-friendly explanations. Don''t Panic!',2, 'http://localhost:3001/images/subredditBanners/ExplainLikeImFiveBannner.png' , 'http://localhost:3001/images/subredditLogos/ELI5Logo.png'),
('apple', 'An unofficial community to discuss Apple devices and software, including news, rumors, opinions and analysis pertaining to the company located at One Apple Park Way.', 1, 'http://localhost:3001/images/subredditBanners/AppleBanner.png' , 'http://localhost:3001/images/subredditLogos/AppleLogo.jpeg'),
('AskReddit', 'r/AskReddit is the place to ask and answer thought-provoking questions.',1 , 'http://localhost:3001/images/subredditBanners/AskRedditBanner.png' , 'http://localhost:3001/images/subredditLogos/AskRedditLogo.png');


INSERT INTO comumunity
    (user_id, subreddit_id)
VALUES
(1,1),
(1,2),
(2,4),
(2,5);


INSERT INTO subreddit_posts
    (subreddit_id, poster_id, title,  body, photo_url)
VALUES
(1,1, 'Sup little person?', NULL, 'https://i.redd.it/q4b36002aa651.jpg' ),
(2,4, 'Jurassic Park Roars To No. 1 Again, 27 Years Later Box Office', NULL, NULL ),
(3,3, 'ELI5: how do show/ movie directors get shots and scenes of totally abandoned cities?', NULL, NULL),
(3,4,'ELI5: Why are other mammals born with the ability to swim, but humans have to learn?', NULL, NULL),
(4,1, 'Phone Calls Will Finally Stop Taking Up the Entire Screen in iOS 14', NULL, NULL),
(5,2, 'To the people who pour the milk before adding cereal, why?', NULL, NULL),
(5,5, 'What fictional character were you afraid the most when you were kid', NULL, NULL),
(1,2, 'Check check and Happy',NULL, 'https://i.redd.it/5wojr10qef651.jpg');


INSERT INTO votes_posts
    (subreddit_posts_id, voter_id,  votes)
VALUES
(7,1, 1),
(8,3, 1),
(8,4, 1);


INSERT INTO comments
    (subreddit_posts, commenter_id , body)
VALUES
(1,4, 'Fun fact: Talking to babies and toddlers as though what they''re saying makes perfect sense is actually helpful, because it helps them learn about how people actually have conversations and talk to each other! Plus, it''s inherently funny to pretend that the literal nonsense children say sometimes is sensible.'),
(1,5, 'Glad to know this validates all of my gibberish conversations with my toddler.'),
(2,1,'Aren''t grandma''s the best!'),
(2,3, 'I feel the same'),
(2,5,'My mom loves to spoil my kids.'),
(3,5,'It came out when I was 4 years old. Its been one of my favorite movie ever since.'),
(4,4,'They''re on a movie set, and the rest of the city is faked with CGI.'),
(5,4,'Humans do it instinctively as well. Put a newborn baby into a pool, it''ll swim happily. We just spend years not doing it so we forget how and have to relearn it.'),
(6,1,'It''s about time!'),
(6,3,'Greatest thing about this is now I can ignore someone without them knowing I''m ignoring them while continuing to use my phone'),
(7,2,'Freddy Krueger! I get scared to fall asleep if I were to think about him before going to bed.'),
(7,5,'Chucky still gives me nightmares to this day'),
(8,2,'I don''t like when the cereal gets soggy quickly'),
(8,3,'What animal pours cereal before milk?');


INSERT INTO comment_replies
    (comment_id, comment_responder_id, body)
VALUES
(1,1,'I do this with my sister and it freaks out my mom.'),
(10,3,'Relatable'),
(10,5,'Now I can ignore my mother-in-law and use my phone at the same time.'),
(14,2,'Me!');



SELECT * FROM users;
SELECT * FROM subreddit;
SELECT * FROM comumunity                
SELECT * FROM subreddit_posts;
SELECT * FROM votes_posts;
SELECT * FROM comments;
SELECT * FROM comment_replies;