import React from 'react';
import { Link } from 'react-router-dom';


function ProfileError() {
    return (
        <div className="profileError-stage" >
            <h3 className='profileError-header'>Sorry, nobody on Reddit goes by that name.</h3>
            <div className='profileError-description'>The person may have been banned or the username is incorrect.</div>
            <Link to='/'>
                <button className='profileError-button' >GO HOME</button>
            </Link>

            <div className='profileError-terms'>
                Purpose of this site is meant to mimic reddit. All rights reserved to reddit inc. REDDIT, REDDIT images and the ALIEN Logo are registered trademarks of reddit inc.
            </div>
        </div >
    )
}
export default ProfileError;
