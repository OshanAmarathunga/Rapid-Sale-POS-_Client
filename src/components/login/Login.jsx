import React, { useState } from "react";
import "./login.css";
import loginImage from "./image/login image.png";
import axios from "axios";
import { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    axios
      .post("http://localhost:8080/auth/login", data)
      .then((rsp) => {
        login(rsp.data);
        navigate("/");
      })
      .catch((e) => {
        toast.error("Please enter valid Username or Password !", {
          position: "top-center",
          theme: "colored"
        });
      });
  };

  return (
    <div className="container" id="mainContainer">
      <ToastContainer/>
      <div className="row" id="loginPage">
        <div className="col-lg-6 col-sm-12" id="logoSignature">
          <img src={loginImage} alt="logo" id="image" />
          <div id="logoFont">
            <label>RAPID Sale POS</label>
          </div>
        </div>

        <div className="col-lg-6 col-sm-12" data-aos="fade-left">
          <div className="container" id="loginForm">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  aria-describedby="emailHelp"
                  onChange={(evt) => {
                    setUsername(evt.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={(evt) => {
                    setPassword(evt.target.value);
                  }}
                />
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
