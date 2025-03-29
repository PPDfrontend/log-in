import React from "react";
import "./App.css";

function Signin (){
        return (
            <div className="container">
          <div className="header">
            <div className="text">Create Account</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <input type="text" placeholder="First Name"/> 
            </div>
          </div>
          <div className="inputs">
            <div className="input" >
              
              <input type="text" placeholder="Last Name"/> 
            </div>
          </div>
          <div className="inputs">
            <div className="input">
              <input type="email" placeholder="Email"/> 
            </div>
          </div>
          <div className="inputs">
            <div className="input">
              <input type="Password" placeholder="Password"/> 
            </div>
          </div>
          <div className="inputs">
            <div className="input">
              <input type="Password" placeholder="Password Confirmation"/> 
            </div>
          </div>
          <div className="inputs">
            <div className="input">
              <input type="date" placeholder="Date of Birth"/> 
            </div>
          </div>
          <div className="gender-container">
          <select id="gender">
            <option value="" disabled selected>Gender</option>
            <option value="man">Man</option>
            <option value="woman">Woman</option>
          </select>
          </div><br></br><br></br>
          <div className="submit-container">
            <div className="submit">Create Account</div>
          </div>
          <div className="already-account">Already have an account? <a className="#">Login Here</a></div>
        </div>
    );
}
export default Signin