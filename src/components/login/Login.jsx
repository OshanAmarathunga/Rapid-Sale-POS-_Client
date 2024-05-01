import React from "react";
import "./login.css";
import loginImage from "./image/login image.png";

function Login() {
  return (
    <div className="container" id="mainContainer">
      <div className="row" id="loginPage">
        <div className="col-lg-6 col-sm-12" id="logoSignature">
          <img src={loginImage} alt="logo" id="image" />
          <div id="logoFont">
            <label>RAPID Sale POS</label>
          </div>
        </div>

        <div className="col-lg-6 col-sm-12" data-aos="fade-left">
          <div className="container" id="loginForm">
            <form>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>

              <div className="d-flex justify-content-center">
                <button class="cssbuttons-io-button" id="loginButton">
                  {" "}
                  LogIN
                  <div class="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
