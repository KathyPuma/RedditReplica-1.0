# Reddit Clone

This Reddit Clone app is meant to replicate Reddit.

## Features

Users are able to:

* Sign up and login in to an existing account.
* Create new subreddit 
* Create a new post on a subreddit
* Upvote/Downvote on a post


## Technologies Used

* React.js
* CSS3 & Material UI
* Node.js & Express.js
* PostgreSQL 
* Passport.js
* pg-promise
* bcrypt

##  Setup

You must have installed Node.js and PostgreSQL in your computer.
You can check for these dependencies with node -v and psql -v. 

1. Clone this repo: 
  
   git clone git@github.com/KathyPuma/Clone_App.git

2. Install dependencies for the Node/Express Server (sever folder):

   cd server && npm install

3. Install dependencies the React App (client folder):

   cd client && npm install

4. Create database and seed sample data while being in the server directory with:
 
   psql -f .database/seed.sql
   Make sure PostgreSQL is running!

5. To launch the Node/Express server, inside the backend folder run:
 
   npm run start:dev
 
6. To launch the React App, inside the frontend folder, and preferably in another terminal window run:
 
   npm start
 

## Wireframes

![homeNotLoggedIn](./public/images/wireframes/homeNotLoggedIn.png)
![homeLoggedIn](./public/images/wireframes/homeLoggedIn.png)
![createSubredddit](./public/images/wireframes/subredditForm.png)
![subreddit](./public/images/wireframes/communityPage.png)
![postInSubredditForm](./public/images/wireframes/postInCommunity.png)

 ## Database Schema
 
![Database Schema](./public/images/databaseSchema_reddit.png)


