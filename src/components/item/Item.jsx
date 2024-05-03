import React from "react";
import "./item.css";
import productImage from "./image/products.png";
import { Link } from "react-router-dom";

function Item() {
  return (
    <div className="container" id="mainContainer1">
      <div className="row shadow mb-2" id="row1">
        <div className="col-lg-12 col-sm-6">
          <div className="container d-flex justify-content-center align-items-center ">
            <div className="mx-1">
              <img id="userImage" src={productImage} alt="" />
            </div>
            <div>
              <h2 className="fs-5  fw-semibold ">Item Master</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="row  shadow">
        <div className="col-lg-3 col-sm-12 p-3">
          <div className="m-2 ">
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                Name
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
                Cost .
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
                M. Price .
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
                O. Price .
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
                Barcode
              </span>
              <input
                type="text"
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
              <option value="1">Vegetables</option>
              <option value="2">Dairy</option>
              <option value="2">Beverages</option>
              <option value="2">Fruits</option>
              <option value="2">Baby Products</option>
              <option value="2">Household</option>
              <option value="2">Cooking Essentials</option>
              <option value="2">Bakery</option>
              <option value="2">Frozen Food</option>
              <option value="2">Meats</option>
              <option value="2">Rice</option>
              <option value="2">Snacks</option>
            </select>
          </div>

          <div className="m-2">
            <select
              class="form-select form-select-sm"
              aria-label="Small select example"
            >
              <option value="1">Gills meat Products (pvt) ltd</option>
              <option value="2">Uniliver </option>
              <option value="2">Nestle products</option>
            </select>
          </div>

          <div>
            <button type="button" class="btn btn-outline-warning shadow ">
              Submit
            </button>
          </div>
        </div>

        <div className="col-lg-9 col-sm-12 p-3">
          <div className="container" id="tableContainer">
            <div className="table-responsive ">
              <table class="table " id="summaryTable">
                <thead>
                  <tr>
                    <th scope="col">I.Code</th>
                    <th scope="col">Name</th>
                    <th scope="col">Cost</th>
                    <th scope="col">M.Price</th>
                    <th scope="col">O.Price</th>
                    <th scope="col">Barcode</th>
                    <th scope="col">Supplier</th>
                    <th scope="col">Category</th>
                    <th scope="col">U.Date/Time</th>
                    <th scope="col">U.User</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr>
                    <th scope="row">66756</th>
                    <td>Samaposha 200g Pkt</td>
                    <td>158.56</td>
                    <td>175</td>
                    <td>160</td>
                    <td>34567889h6</td>
                    <td>CBL pvt Ltd</td>
                    <td>Snacks</td>
                    <td>11.20am 03/05/2024</td>
                    <td>dushan</td>
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

          <div className="row m-2">
            <div className="col-lg-4 col-sm-12">
              <div className="m-2 ">
                <div class="input-group input-group-sm mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="By item code.."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="m-2 ">
                <div class="input-group input-group-sm mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="By name.."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="m-2 ">
                <div class="input-group input-group-sm mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="By barcode.."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end ">
            <div>
              <Link to="/">
                <button type="button" class="btn btn-outline-light shadow ">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
