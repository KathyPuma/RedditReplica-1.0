import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Components/Navbar.css'



function Navbar() {
    return (
        <div className="navbar-stage"  >
            <h1 className="youtube">reddit</h1>


            <button>LOG IN</button>
            <button>SIGN UP</button>

            {/* {login ? (<div></div>) : (<div></div>)} */}
            {/* <Link to="/"  ></Link>{" "} */}





        </div >
    )
}
export default Navbar;



