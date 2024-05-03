import React from "react";
import "./userManagement.css";
import { Link } from "react-router-dom";
import userImage from "./image/user.png";

function UserManagement() {
  return (
    <div className="container" id="mainContainer1">
      <div className="row shadow mb-2" id="row1">
        <div className="col-lg-12 col-sm-6">
          <div className="container d-flex justify-content-center align-items-center ">
            <div className="mx-1">
              <img id="userImage" src={userImage} alt="" />
            </div>
            <div>
              <h2 className="fs-5  fw-semibold ">User Authentication</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="row  shadow">
        <div className="col-lg-4 col-sm-12 p-3">
          <div className="m-2 ">
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                First Name
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
          </div>
          <div className="m-2 ">
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                Last Name
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
          </div>
          <div className="m-2 ">
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                Age
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
          </div>
          <div className="m-2 ">
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                Contact No
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
          </div>
          <div className="m-2 ">
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                NIC Number
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
          </div>
          <div className="m-2 ">
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                Username
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
          </div>
          <div className="m-2 ">
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                Password
              </span>
              <input
                type="password"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
          </div>
          <div className="m-2">
            <select
              class="form-select form-select-sm"
              aria-label="Small select example"
            >
              <option value="1">Casier</option>
              <option value="2">Admin</option>
            </select>
          </div>

          <div>
            <button type="button" class="btn btn-outline-warning shadow ">
              Submit
            </button>
          </div>
        </div>

        <div className="col-lg-8 col-sm-12 p-3">
          <div className="container" id="tableContainer">
            <div className="table-responsive ">
              <table class="table " id="summaryTable">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Age</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Nic</th>
                    <th scope="col">Username</th>
                    <th scope="col">Role</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr>
                    <th scope="row">1</th>
                    <td>Dushan</td>
                    <td>Colombage</td>
                    <td>30</td>
                    <td>0774872919</td>
                    <td>199416000530</td>
                    <td>dushan30</td>
                    <td>Cashier</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-success"
                        id="actionButton"
                      >
                        U
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-danger"
                        id="actionButton"
                      >
                        D
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="m-2 d-flex  justify-content-end ">
            <Link to={"/"}>
              <button type="button" class="btn btn-outline-light shadow ">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
