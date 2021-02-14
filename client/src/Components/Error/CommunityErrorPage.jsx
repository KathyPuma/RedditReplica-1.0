import React from 'react';


function CommunityErrorPage() {
    return (
        <div className="communityErrorPage-stage" >
            <h3 className='communityErrorPage-header'>Sorry, there aren’t any communities on Reddit with that name.</h3>
            <div className='communityErrorPage-description'>This community may have been banned or the community name is incorrect.</div>
            <button className='communityErrorPage-button' >GO HOME</button>

            <div className='communityErrorPage-terms'>
                Purpose of this site is meant to mimic reddit. All rights reserved to reddit inc. REDDIT, REDDIT images and the ALIEN Logo are registered trademarks of reddit inc.
            </div>
        </div >
    )
}
export default CommunityErrorPage;
