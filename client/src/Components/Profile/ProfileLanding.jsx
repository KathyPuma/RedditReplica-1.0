import React from "react";
import PorfileNavbar from './ProfileNavbar'


function ProfileLanding(props) {
  return (
    <div className="profileLanding-stage">
        <PorfileNavbar 
        username = {props.match.params.username}
        />
            
    </div>

  );
}

export default ProfileLanding;