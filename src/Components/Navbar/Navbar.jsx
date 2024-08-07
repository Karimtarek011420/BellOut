import React from "react";
import { Link } from "react-router-dom";
import Bar from "../Bar/Bar";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <Bar />
      <nav class="navbar navbar-expand-lg">
        <div class="container ">
          <Link class="navbar-brand" to="#">
            <button
              style={{
                fontFamily: "Montserrat",
                fontStyle: "SemiBold",
                fontSize: "15px",
                color: "#FFFFFF",
                backgroundColor: "#E30613",
              }}
              type=" button"
              className=" px-3 py-2 border-0 rounded-3  d-flex justify-content-center align-items-center "
            >
              {" "}
              <i class="fa-solid fa-list-ul pe-2"></i>Browse Category{" "}
              <i
                class="fa-solid fa-angle-down  fa-xl ps-2"
                style={{ color: "#ffffff" }}
              ></i>{" "}
            </button>
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0  d-flex justify-content-center align-items-center flexcenter">
              <li class="nav-item ">
                <Link
                  class="nav-link active"
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "SemiBold",
                    fontSize: "20px",
                    color: "#232323",
                  }}
                  aria-current="page"
                  to="#"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item ">
                <Link
                  class="nav-link active"
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "SemiBold",
                    fontSize: "20px",
                    color: "#232323",
                  }}
                  aria-current="page"
                  to="#"
                >
                  About Us
                </Link>
              </li>
              <li class="nav-item ">
                <Link
                  class="nav-link active"
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "SemiBold",
                    fontSize: "20px",
                    color: "#E30613",
                  }}
                  aria-current="page"
                  to="#"
                >
                  Blog
                </Link>
              </li>
              <li class="nav-item ">
                <Link
                  class="nav-link active"
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "SemiBold",
                    fontSize: "20px",
                    color: "#232323",
                  }}
                  aria-current="page"
                  to="#"
                >
                  Contact Us
                </Link>
              </li>
              <li class="nav-item ">
                <Link
                  class="nav-link active"
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "SemiBold",
                    fontSize: "20px",
                    color: "#232323",
                  }}
                  aria-current="page"
                  to="#"
                >
                  <div class="search-container">
                    <input type="text" placeholder="Search your product" />
                    <i class="fas fa-search icon  fa-2xl"></i>
                  </div>
                </Link>
              </li>
              <li class="nav-item ms-lg-3 ">
                <span
                  class="nav-link active"
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "SemiBold",
                  }}
                  aria-current="page"
                  to="#"
                >
                  <i
                    class="fa-regular fa-bell  fa-lg position-relative"
                    style={{ color: "#E30613" }}
                  >
                    <span class="sign position-absolute start-50  badge  rounded-2">
                      2+
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </i>
                  <span className=" ms-3" style={{ color: "B5B5B5" }}>
                    |
                  </span>
                </span>
              </li>
              <li class="nav-item  ">
                <span
                  class="nav-link active"
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "SemiBold",
                  }}
                  aria-current="page"
                  to="#"
                >
                  <i
                    class="fa-solid fa-cart-plus fa-lg position-relative"
                    style={{ color: "#E30613" }}
                  >
                    <span class="sign position-absolute start-50  badge  rounded-2">
                      2+
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </i>
                  <span className=" ms-3" style={{ color: "B5B5B5" }}>
                    |
                  </span>
                </span>
              </li>
              <li class="nav-item  ">
                <span
                  class="nav-link active"
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "SemiBold",
                  }}
                  aria-current="page"
                  to="#"
                >
                  <i
                    class="fa-solid fa-retweet fa-lg position-relative"
                    style={{ color: "#E30613" }}
                  >
                    <span class="sign position-absolute start-50  badge  rounded-2">
                      2+
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </i>
                  <span className=" ms-3" style={{ color: "B5B5B5" }}>
                    |
                  </span>
                </span>
              </li>
              <li class="nav-item  ">
              <div className="">
                <span 
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "SemiBold",
                  }}
                  class="nav-link active  "
                
                  aria-current="page"
                  to="#"
                >
                 <img src={require('../../images/Ellipse 1.png')} className="" alt="" />
                 <span className="p-1">Hello, Ahmed</span>
                 <i
                    class="fa-solid fa-angle-down"
                    style={{ color: "#545454" }}
                  ></i>
                                 </span>

              </div>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
