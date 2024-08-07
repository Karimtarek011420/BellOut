import React from "react";
import { Link } from 'react-router-dom'


export default function Bar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <Link class="navbar-brand" to="#">
            <img
              src={require("../../images/Rectangle 1.png")}
              className=" w-75"
              alt="Logo"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-0">
              <li class="nav-item">
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "Medium",
                    fontSize: "14px",
                    color: "#232323",
                  }}
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Contact Us{" "}
                  <span className=" ms-1" style={{ color: "B5B5B5" }}>
                    |
                  </span>
                </span>
              </li>
              <li class="nav-item">
                <Link
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "Medium",
                    fontSize: "14px",
                    color: "#232323",
                  }}
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  {" "}
                  <i class="fa-regular fa-envelope  fa-lg"></i>{" "}
                  contact@bellout.com{" "}
                  <span className=" ms-1" style={{ color: "B5B5B5" }}>
                    |
                  </span>
                </Link>
              </li>
              <li class="nav-item p">
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "Medium",
                    fontSize: "14px",
                    color: "#232323",
                  }}
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  <i class="fa-solid fa-phone    fa-"></i> + 02 1300000000{" "}
                  <span className=" ms-1" style={{ color: "B5B5B5" }}>
                    |
                  </span>
                </span>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center flexcenter">
              <li class="nav-item">
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "Medium",
                    fontSize: "14px",
                    color: "#232323",
                  }}
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  <i class="fa-solid fa-globe me-1"></i> English{" "}
                  <i
                    class="fa-solid fa-angle-down"
                    style={{ color: "#545454" }}
                  ></i>
                </span>
              </li>
              <li class="nav-item ms-lg-3">
                <button
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "Medium",
                    fontSize: "10px",
                    color: "#FFFFFF",
                    backgroundColor: "#E30613",
                  }}
                  type=" button"
                  className=" px-2 py-1 border-0 rounded-2  "
                >
                  <i class="fa-solid fa-children pe-2"></i> BECOME A VENDOR
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
