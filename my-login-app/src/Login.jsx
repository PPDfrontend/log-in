import React from "react";
import"./App.css";

function Login () {
    return (
        <div className="container">
      <div className="header">
        <div className="text">Log In</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          
          <input type="text" placeholder="Email"/> 
        </div>
      </div>
      <div className="inputs">
        <div className="input" >
          
          <input type="password" placeholder="Password"/> 
        </div>
      </div>
      
      <div className="submit-container">
        <div className="submit">Log In</div>
      </div><br></br>
      <div className="already-account">Don't you have an account? <a className="#">Sign Up</a></div>
    </div>

    )

}
export default Login