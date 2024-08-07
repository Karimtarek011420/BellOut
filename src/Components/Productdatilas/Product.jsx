import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import $ from 'jquery';
import {  useEffect } from 'react';
export default function Product() {
  useEffect(() => {
    $('#datail').show(1000);
  
  }, [])
  return (
    <>
      <div id="datail" className=" container pb-5">
        <div className="datilasline d-flex  justify-content-start align-items-center position-relative">
          <Link className=" text-decoration-none  text-black" to={"/blog"}>
            {" "}
            <h5>Blogs </h5>
          </Link>
          <i class="fa-solid fa-chevron-right mx-2 fa-xl"></i>
          <h5 style={{ color: "#E30613" }}>Blogs details</h5>
        </div>
        <div  className="blog  pt-5">
          <div className=" blogineer position-relative overflow-hidden ">
            <img
              src={require("../../images/Rectangle 4232.jpg")}
              className=" w-100 mb-3"
              alt="blog"
            />
            <div className="bargrag d-flex justify-content-center align-items-center">
              <p className="mediap"
                style={{
                  fontSize: "16px",
                  fontFamily: "Montserrat",
                  fontWeight: "Medium",
                }}
              >
                When you put on a Meta Quest headset, you become fully absorbed
                in immersive experiences, and ones that blend digital content
                with your physical space. Quest 3 is our most powerful headset
                yet that unleashes breakthrough mixed reality – from virtual
                reality, to augmented reality, and everything in-between. You’ve
                probably heard about its applications for gaming, but mixed
                reality has the potential to transform how work out, hang out,
                get entertained and more.
              </p>
            </div>
          </div>
          <h4
            className="blog1 position-relative w-75"
            style={{
              color: "#E30613",
              fontSize: "24px",
              fontWeight: "SemiBold",
              fontFamily: "Montserrat",
            }}
          >
            Meta VR Headsets An outstanding experience For a more integrated a
            virtual reality meta for reality{" "}
          </h4>
          <div className="time py-3 d-flex  position-relative">
            <div>
              <img src={require("../../images/2.jpg")} alt="" />
              <span style={{ fontSize: "12px" }} className=" px-1">
                Ahmed
              </span>
              <span className=" ms-1" style={{ color: "B5B5B5" }}>
                |
              </span>
            </div>
            <div className=" p-1">
              <i
                class="fa-regular fa-calendar"
                style={{ color: "#E30613" }}
              ></i>
              <span className="px-1" style={{ fontSize: "12px" }}>
                20 JUN 2024
              </span>
              <span className=" ms-1" style={{ color: "B5B5B5" }}>
                |
              </span>
            </div>
            <div className=" p-1">
              <i class="fa-regular fa-clock" style={{ color: "#E30613" }}></i>
              <span className="px-1" style={{ fontSize: "12px" }}>
                8:24 PM
              </span>
              <span className=" ms-1" style={{ color: "B5B5B5" }}>
                |
              </span>
            </div>
            <div className=" p-1">
              <span className="px-1" style={{ fontSize: "12px" }}>
                528
              </span>
              <i class="fa-regular fa-eye" style={{ color: "#E30613" }}></i>
              <span className=" ms-1" style={{ color: "B5B5B5" }}>
                |
              </span>
            </div>
            <div className=" p-1">
              <span className="px-1" style={{ fontSize: "12px" }}>
                07
              </span>
              <i
                class="fa-regular fa-message"
                style={{ color: "#E30613", fontSize: "10px" }}
              ></i>
              <span className=" ms-1" style={{ color: "B5B5B5" }}>
                |
              </span>
            </div>
          </div>
          <p
            className=" pt-2"
            style={{
              fontSize: "16px",
              fontFamily: "Montserrat",
              fontWeight: "Medium",
            }}
          >
            When you put on a Meta Quest headset, you become fully absorbed in
            immersive experiences, and ones that blend digital content with your
            physical space. Quest 3 is our most powerful headset yet that
            unleashes breakthrough mixed reality – from virtual reality, to
            augmented reality, and everything in-between. You’ve probably heard
            about its applications for gaming, but mixed reality has the
            potential to transform how work out, hang out, get entertained and
            more.
          </p>
          <p
            style={{
              fontSize: "16px",
              fontFamily: "Montserrat",
              fontWeight: "Medium",
            }}
          >
            When you put on a Meta Quest headset, you become fully absorbed in
            immersive experiences, and ones that blend digital content with your
            physical space. Quest 3 is our most powerful headset yet that
            unleashes breakthrough mixed reality – from virtual reality, to
            augmented reality, and everything in-between. You’ve probably heard
            about its applications for gaming, but mixed reality has the
            potential to transform how work out, hang out, get entertained and
            more.
          </p>
          <p
            style={{
              fontSize: "16px",
              fontFamily: "Montserrat",
              fontWeight: "Medium",
            }}
          >
            When you put on a Meta Quest headset, you become fully absorbed in
            immersive experiences, and ones that blend digital content with your
            physical space. Quest 3 is our most powerful headset yet that
            unleashes breakthrough mixed reality – from virtual reality, to
            augmented reality, and everything in-between. You’ve probably heard
            about its applications for gaming, but mixed reality has the
            potential to transform how work out, hang out, get entertained and
            more.
          </p>
        </div>
        <div className="row datilasline position-relative ">
          <div className=" col-md-6 ">
            <h4 style={{ color: "#E30613" }}>Comments (3)</h4>
          </div>
          <div className=" col-md-6">
            <h4 style={{ color: "#E30613" }}>Add a comment</h4>
          </div>
        </div>
        <div className="row py-5 gy-4">
          <div className=" col-md-6">
            <div className="commnt py-3 d-flex  position-relative">
              <div>
                <img src={require("../../images/2.jpg")} alt="" />
                <span style={{ fontSize: "12px" }} className=" px-1">
                  Ahmed
                </span>
                <span className=" ms-1" style={{ color: "B5B5B5" }}>
                  |
                </span>
              </div>
              <div className=" p-1">
                <i
                  class="fa-regular fa-calendar"
                  style={{ color: "#E30613" }}
                ></i>
                <span className="px-1" style={{ fontSize: "12px" }}>
                  20 JUN 2024
                </span>
                <span className=" ms-1" style={{ color: "B5B5B5" }}>
                  |
                </span>
              </div>
              <div className=" p-1">
                <i class="fa-regular fa-clock" style={{ color: "#E30613" }}></i>
                <span className="px-1" style={{ fontSize: "12px" }}>
                  8:24 PM
                </span>
                <span className=" ms-1" style={{ color: "B5B5B5" }}>
                  |
                </span>
              </div>
              <div className=" p-1">
                <span className="px-1" style={{ fontSize: "12px" }}>
                  528
                </span>
                <i class="fa-regular fa-eye" style={{ color: "#E30613" }}></i>
                <span className=" ms-1" style={{ color: "B5B5B5" }}>
                  |
                </span>
              </div>
              <div className=" p-1">
                <span className="px-1" style={{ fontSize: "12px" }}>
                  07
                </span>
                <i
                  class="fa-regular fa-message"
                  style={{ color: "#E30613", fontSize: "10px" }}
                ></i>
                <span className=" ms-1" style={{ color: "B5B5B5" }}>
                  |
                </span>
              </div>
            </div>
            <p>
              There are many variations of passages Lorem Ipsum available, but
              the leap into electronic typesetting, remaining
              essentiallyunchavjkk electrtypesetting remaining majority have.
              There are many variations of passages of{" "}
            </p>
            <div className=" w-25 ms-auto">
              <button
                className=" px-3 border-0 ms"
                style={{ fontSize: "14px", backgroundColor: "#CFCFCF" }}
              >
                {" "}
                <i class="fa-solid fa-share"></i> Reply
              </button>
            </div>
            <div className=" w-75 m-auto">
              <div className=" py-3 d-flex  position-relative">
                <div>
                  <img src={require("../../images/2.jpg")} alt="" />
                  <span style={{ fontSize: "12px" }} className=" px-1">
                    Mohamed
                  </span>
                  <span className=" ms-1" style={{ color: "B5B5B5" }}>
                    |
                  </span>
                </div>
                <div className=" p-1">
                  <i
                    class="fa-regular fa-calendar"
                    style={{ color: "#E30613" }}
                  ></i>
                  <span className="px-1" style={{ fontSize: "12px" }}>
                    20 JUN 2024
                  </span>
                  <span className=" ms-1" style={{ color: "B5B5B5" }}>
                    |
                  </span>
                </div>
                <div className=" p-1">
                  <i
                    class="fa-regular fa-clock"
                    style={{ color: "#E30613" }}
                  ></i>
                  <span className="px-1" style={{ fontSize: "12px" }}>
                    8:24 PM
                  </span>
                  <span className=" ms-1" style={{ color: "B5B5B5" }}>
                    |
                  </span>
                </div>
                <div className=" p-1">
                  <span className="px-1" style={{ fontSize: "12px" }}>
                    528
                  </span>
                  <i class="fa-regular fa-eye" style={{ color: "#E30613" }}></i>
                </div>
              </div>
              <p>
                There are many variations of passages Lorem Ipsum available, but
                the leap into electronic typesetting, remaining
                essentiallyunchavjkk electrtypesetting remaining majority have.
                There are many variations
              </p>
              <div className=" w-25 ms-auto m-0 p-0">
                <button
                  className=" px-3 border-0 ms"
                  style={{ fontSize: "14px", backgroundColor: "#CFCFCF" }}
                >
                  {" "}
                  <i class="fa-solid fa-share"></i> Reply
                </button>
              </div>
              <div className=" py-3 d-flex  position-relative">
                <div>
                  <img src={require("../../images/2.jpg")} alt="" />
                  <span style={{ fontSize: "12px" }} className=" px-1">
                    Ahmed
                  </span>
                  <span className=" ms-1" style={{ color: "B5B5B5" }}>
                    |
                  </span>
                </div>
                <div className=" p-1">
                  <i
                    class="fa-regular fa-calendar"
                    style={{ color: "#E30613" }}
                  ></i>
                  <span className="px-1" style={{ fontSize: "12px" }}>
                    20 JUN 2024
                  </span>
                  <span className=" ms-1" style={{ color: "B5B5B5" }}>
                    |
                  </span>
                </div>
                <div className=" p-1">
                  <i
                    class="fa-regular fa-clock"
                    style={{ color: "#E30613" }}
                  ></i>
                  <span className="px-1" style={{ fontSize: "12px" }}>
                    8:24 PM
                  </span>
                  <span className=" ms-1" style={{ color: "B5B5B5" }}>
                    |
                  </span>
                </div>
                <div className=" p-1">
                  <span className="px-1" style={{ fontSize: "12px" }}>
                    528
                  </span>
                  <i class="fa-regular fa-eye" style={{ color: "#E30613" }}></i>
                </div>
              </div>
              <p>
                There are many variations of passages Lorem Ipsum available, but
                the leap into electronic typesetting, remaining
                essentiallyunchavjkk electrtypesetting remaining majority have.
                There are many variations
              </p>
              <div className=" w-25 ms-auto m-0 p-0">
                <button
                  className=" px-3 border-0 ms"
                  style={{ fontSize: "14px", backgroundColor: "#CFCFCF" }}
                >
                  {" "}
                  <i class="fa-solid fa-share"></i> Reply
                </button>
              </div>
              <p>Your Comment</p>
              <textarea
                className=" w-100"
                name=""
                id=""
                placeholder="Enter Your Comment"
              ></textarea>
              <button type="button" class="  btn btn-danger  w-100 ">
                Add a comment
              </button>
            </div>
            <div className="commnt position-relative mt-4"></div>
            <div className=" py-3 d-flex  position-relative">
              <div>
                <img src={require("../../images/2.jpg")} alt="" />
                <span style={{ fontSize: "12px" }} className=" px-1">
                  Mohamed
                </span>
                <span className=" ms-1" style={{ color: "B5B5B5" }}>
                  |
                </span>
              </div>
              <div className=" p-1">
                <i
                  class="fa-regular fa-calendar"
                  style={{ color: "#E30613" }}
                ></i>
                <span className="px-1" style={{ fontSize: "12px" }}>
                  20 JUN 2024
                </span>
                <span className=" ms-1" style={{ color: "B5B5B5" }}>
                  |
                </span>
              </div>
              <div className=" p-1">
                <i class="fa-regular fa-clock" style={{ color: "#E30613" }}></i>
                <span className="px-1" style={{ fontSize: "12px" }}>
                  8:24 PM
                </span>
                <span className=" ms-1" style={{ color: "B5B5B5" }}>
                  |
                </span>
              </div>
              <div className=" p-1">
                <span className="px-1" style={{ fontSize: "12px" }}>
                  528
                </span>
                <i class="fa-regular fa-eye" style={{ color: "#E30613" }}></i>
              </div>
            </div>
            <p>
              There are many variations of passages Lorem Ipsum available, but
              the leap into electronic typesetting, remaining
              essentiallyunchavjkk electrtypesetting remaining majority have.
              There are many variations
            </p>
            <div className=" w-25 ms-auto m-0 p-0">
              <button
                className=" px-3 border-0 ms"
                style={{ fontSize: "14px", backgroundColor: "#CFCFCF" }}
              >
                {" "}
                <i class="fa-solid fa-share"></i> Reply
              </button>
            </div>
          </div>
          <div className=" col-md-6 py-4">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput1"
                placeholder="Enter Your Name"
              />
              <label for="floatingInput">Enter Your Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput2"
                placeholder="E-mail Address"
              />
              <label for="floatingInput">E-mail Address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput3"
                placeholder="Phone"
              />
              <label for="floatingInput"> Enter Your Phone</label>
            </div>
            <p>Your Comment</p>
            <textarea
              className=" w-100"
              name=""
              id=""
              placeholder="Enter Your Comment"
            ></textarea>
            <button type="button" class="  btn btn-danger  w-100 ">
              Add a comment
            </button>
          </div>
        </div>
        <div className=" text-center d-flex justify-content-center align-items-center">
          <h4>
            share:
          </h4>
          <div className=" d-flex  mx-1">
            <div className="  p-3 my-2 mx-1 iconvender d-flex justify-content-center align-items-center">
              <Link>
                {" "}
                <i class="fa-brands fa-facebook-f text-white  fs-6  "></i>
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
                <i class="fa-brands fa-twitter text-white  fs-6  "></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
