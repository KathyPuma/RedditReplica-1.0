import React  from 'react';
import { Link } from 'react-router-dom';



function ProfileNavbar(props) {

    return (
        <div className="profile-navbar-stage" >
            <Link className='profile-navbar-link' to={`/user/${props.username}`}><h3 className='profile-nav-heading'>OVERVIEW</h3></Link>
            <Link className='profile-navbar-link' to={`/user/${props.username}/posts/`}><h3 className='profile-nav-heading'>POSTS</h3></Link>{" "}
            <Link className='profile-navbar-link' to={`/user/${props.username}/comments/`}><h3 className='profile-nav-heading'>COMMENTS</h3></Link>{" "}
            <Link className='profile-navbar-link' to={`/user/${props.username}/saved/`}><h3 className='profile-nav-heading' >SAVED</h3></Link>{" "}
            <Link className='profile-navbar-link' to={`/user/${props.username}/hidden/`}><h3 className='profile-nav-heading'>HIDDEN</h3></Link>
            <Link className='profile-navbar-link' to={`/user/${props.username}/upvoted/`}><h3 className='profile-nav-heading'>UPVOTED</h3></Link>{" "}
            <Link className='profile-navbar-link' to={`/user/${props.username}/downvoted/`}><h3 className='profile-nav-heading'>DOWNVOTED</h3></Link>{" "}
            <Link className='profile-navbar-link' to={`/user/${props.username}/gilded/`}><h3 className='profile-nav-heading'>AWARDS RECEIVED</h3></Link>{" "}
            <Link className='profile-navbar-link' to={`/user/${props.username}/gilded/given/`}><h3 className='profile-nav-heading' >AWARDS GIVEN</h3></Link>{" "}
        </div >
    )
}
export default ProfileNavbar;