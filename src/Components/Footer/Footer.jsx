import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className=" text-white" style={{ backgroundColor: "#232323" }}>
        <div className=" container pt-2">
          <div className="row  gy-2">
            <div className=" col-md-3">
              <img
                src={require("../../images/footer.png")}
                width={115}
                height={158}
                alt=""
              />
              <p className=" pb-0 pt-3">Download App</p>
              <div className="footermadi">
                <div className="mx-1">
                  <img src={require("../../images/google (1) 2.png")} alt="" />
                </div>
                <div className="py-2">
                  <img src={require("../../images/app (1) 2.png")} alt="" />
                </div>
              </div>
            </div>
            <div className=" col-md-3 footer-section">
              <h6 className=" py-4 fs-5">Service Us</h6>
              <ul>
                <li>About Us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
                <li>Terms & Conditions</li>
                <li>FAQ</li>
              </ul>
              <button className=" btn1  rounded-5 px-5 my-2">
                Become a Vendor
              </button>
              <div className=" d-flex  mx-3">
                <div className="  p-3 my-2 mx-1 iconvender d-flex justify-content-center align-items-center">
                  <Link>
                    {" "}
                    <i class="fa-brands fa-facebook-f text-white  fs-5  "></i>
                  </Link>
                </div>
                <div className=" my-2 mx-1   ">
                  <Link>
                    {" "}
                    <img
                      src={require("../../images/skill-icons_instagram.png")}
                      width={30}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="  p-3 my-2 mx-1 iconvender d-flex justify-content-center align-items-center">
                  <Link>
                    {" "}
                    <i class="fa-brands fa-twitter text-white  fs-5  "></i>
                  </Link>
                </div>
                <div className="  p-3 my-2 mx-1 iconvenderyou d-flex justify-content-center align-items-center">
                  <Link>
                    {" "}
                    <i class="fa-brands fa-youtube text-white "></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" col-md-3 footer-section">
              <h6 className=" py-4 fs-5">Our Company</h6>
              <ul>
               <div>
               <li>All Products</li>
               <li>All orders</li>
               </div>
                <li>Payment Methods</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className=" col-md-3 footer-section">
              <h6 className=" py-4 fs-5">Store Infomation</h6>
              <ul>
                <li className=" d-flex justify-content-start align-items-center">
                  <i class="fa-solid fa-location-dot mb-4 mx-2  fa-xl "></i>
                  <p>Megashop - Demo Store 570 - Union Trade Center </p>
                </li>
               <div className="footermadi">
               <li className=" d-flex justify-content-start align-items-center">
                  <i class="fa-solid fa-phone mb-2 mx-2  fa-xl "></i>
                  <p>+ 02 1300000000 </p>
                </li>
                <li className=" d-flex justify-content-start align-items-center">
                  <i class="fa-regular fa-envelope mb-2 mx-2  fa-xl "></i>
                  <p>contact@bellout.com </p>
                </li>
               </div>
              </ul>
              <p style={{ fontSize: "12px" }}>We Are Ready To Help!</p>
              <div className="readyemail bg-white d-flex rounded-4">
                <input
                  type="text"
                  placeholder="enter your Email"
                  className=" w-75 p-1 bg-white"
                />
                <button className="bg-danger btn2 text-white w-25">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <p className=" text-white text-center p-3">
            <span
              style={{ fontWeight: "bolder" }}
              className="right text-white  "
            >
              &copy;
            </span>{" "}
            Copyright 2024 Bellout | Developed by{" "}
            <span style={{ color: "#F79E1B" }}>
              e-RAMO For Digital Solutions
            </span>{" "}
          </p>
        </div>
      </footer>
    </>
  );
}
