import React from "react";
import './login.css'
import loginImage from './image/login image.png'

function Login(){
    return(
        <div className="row" id="loginPage">
            <div className="col-lg-6 col-sm-12" id="logoSignature">
                <img src={loginImage} alt="logo" id="image"/>
                <div id="logoFont">
                    <label>Rapid Sale POS</label>
                </div>
            </div>


            <div className="col-lg-6 col-sm-12">
            <div className="container" id="loginForm">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
            </div>

        </div>
    )
}

export default Login