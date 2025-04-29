import { Link } from "react-router-dom";
import React from "react";
import logo from '../image/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch ,faUser} from '@fortawesome/free-solid-svg-icons';
import './Header.css'

const Header= ()=>{
    return(
    <>
    <div className="header">
        <div className="first">
        <Link to="/Home"><img src={logo} alt="logo"/></Link>
        </div>
        <div className="headermadil">
                <div className="madil">
                    <input placeholder="What Do You Want?"></input>
                    <FontAwesomeIcon icon={faSearch} />

                </div>
            </div>
        <div className="third">
        <li className="Sign-up no-underline"><Link to="/Signup" className="Signup">  <FontAwesomeIcon icon={faUser}  /> Sign Up</Link></li>
        <li className="Sign-in no-underline"><Link to="/Sign" className="Signin">  <FontAwesomeIcon icon={faUser}  />Sign In</Link></li>
        </div>

    </div>
   
    </>

    );
}

export default Header;