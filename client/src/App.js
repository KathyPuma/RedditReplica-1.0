import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Community from './Components/Community'
import Profile from './Components/Profile'
import Comments from './Components/Comments'
import Posts from './Components/Posts'
import Downvoted from './Components/Downvoted'
import Upvoted from './Components/Upvoted'
import { connect } from 'react-redux'

import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="app-route">
        <Switch>

          <Route path="/r/:community/" component={Community} />
          <Route path="/user/:username/" component={Profile} />
          <Route path="/user/:username/comments/" component={Comments} />
          <Route path="/user/:username/posts/" component={Posts} />
          <Route path="/user/:username/downvoted/" component={Downvoted} />
          <Route path="/user/:username/upvoted/" component={Upvoted} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  
  return {
    user: state.user,
  };
}
export default withRouter(connect(mapStateToProps)(App));