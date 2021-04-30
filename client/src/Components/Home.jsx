import React, { useState, useEffect } from "react";
import axios from "axios";
import { homeStyle } from "./styling/homeStyle";
import homeBanner from "../redditImages/reddit__homeBanner.png";
import store from "../redux/store/store";
import PostDisplayed from './PostDisplayed'
import HiddenSideBar from "./HiddenSideBar";
import FormButton from './MaterialUiComponents/FormButton';
import "./Home.css";


function Home() {

  const state = store.getState();
  const [subredditsPosts, setSubredditsPosts] = useState([]);
  const homeStyleTheme = homeStyle();

  useEffect(() => {
    handleAllSubRedditPosts()
  }, [])

  const handleAllSubRedditPosts = async () => {
    const allSubredditsPosts = await axios.get(`/api/subreddit`)
    setSubredditsPosts(allSubredditsPosts.data.payload)
   
  }



  return (
    <div className={homeStyleTheme.root} >
      <div className={homeStyleTheme.container}>

        <PostDisplayed
  
          subredditsPosts={subredditsPosts}
          homeStyleTheme={homeStyleTheme}
          currPage="Home"
          userId = {state.user.user.user_id}
          handleAllSubRedditPosts = {handleAllSubRedditPosts}
        />


        {state.user.loggedIn ?
          <HiddenSideBar
            currPage="Home"
            homeStyleTheme={homeStyleTheme}
            banner={homeBanner}
            cardTitle="home"
            cardDescription="Your personal Reddit frontpage. Come here to check in with your favorite communities"
            ButtonAction={() => (
              <FormButton
                user={state.user} />

            )}
          />
          : (<></>)}

      </div>

    </div >
  )
}

export default Home;

