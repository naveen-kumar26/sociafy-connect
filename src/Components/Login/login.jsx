import React from "react";
import './style.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div >
            <div className="heading">
                    <h3 align="center">Login Page</h3>
            </div>
            <div className="box" align="center">
                
                <div className="feild">
                    <label>Username     </label> <br></br>
                    <i class="bi bi-person-fill"></i>&nbsp;&nbsp;&nbsp; 
                    <input type="text" align="left" name="username" id="username" placeholder="Enter Username"/>
                </div>
                <div className="feild">
                    <label>Password     </label><br></br>
                    <i class="bi bi-lock-fill"></i>&nbsp;&nbsp;&nbsp;
                    <input type="password" align="left" name="password" id="password" placeholder="Enter Password" />
                </div><br></br>
                <div  className="log">
                    <Link to="/userpage"><p>Log In</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Login;