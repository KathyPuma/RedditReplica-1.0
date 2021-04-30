import React from "react";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import "./Home.css";

function HiddenSideBar({ currPage, homeStyleTheme, banner, ButtonAction, cardTitle, cardDescription }) {

    return (
        <div>
            <Hidden smDown >
                <Paper className={homeStyleTheme.paper}
                    style={{ background: "#DAE0E6", boxShadow: "none", padding: "12px" }}>

                    <div className="subreddit-card-home">
                        <div className="card-banner">
                            <img alt="reddit-banner" src={banner}
                                className={currPage === "Community" ? "community-img" : "home-banner"}
                            />
                        </div>

                        <div className="card-create-button">

                            {currPage !== "Community" ? (
                                <div className="community-title-div">
                                    <span className="create-community-card"></span>
                                    <span className="create-community-card-title">{cardTitle} </span>
                                </div>
                            ) : (<>
                            </>)}

                            <span className="card-title-span">{cardDescription}</span>

                            <div>

                                <div className="formbutton">
                                    <ButtonAction />
                                </div>

                            </div>
                        </div>
                    </div>
                </Paper>
            </Hidden></div>
    )
}

export default HiddenSideBar;

