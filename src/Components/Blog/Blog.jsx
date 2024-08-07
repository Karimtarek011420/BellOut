import React, { useEffect } from "react";
import "./Blog.css";
import $ from 'jquery';
import { Link } from "react-router-dom";

export default function Blog() {
  useEffect(() => {
    $('#gquerle').show(1000);
    $('#blogk').show(1500);
    $('#bloga').show(2000);
    $('#blogr').show(2500);
  }, [])
  
  return (
    <>
      <div className=" btnmei  w-75 m-auto pb-5">
        <div className="row">
          <div className=" col-md-12">
            <Link className=" text-decoration-none text-black " to={"/Product"}>
              <div id="gquerle"  className="blog  ">
                <div className=" blogineer position-relative overflow-hidden ">
                  <img
                    src={require("../../images/Rectangle 4232.jpg")}
                    className=" w-100 mb-3"
                    alt="blog"
                  />
                  <div className="bargrag d-flex justify-content-center align-items-center">
                    <p
                      className="mediap"
                      style={{
                        fontSize: "16px",
                        fontFamily: "Montserrat",
                        fontWeight: "Medium",
                      }}
                    >
                      When you put on a Meta Quest headset, you become fully
                      absorbed in immersive experiences, and ones that blend
                      digital content with your physical space. Quest 3 is our
                      most powerful headset yet that unleashes breakthrough
                      mixed reality – from virtual reality, to augmented
                      reality, and everything in-between. You’ve probably heard
                      about its applications for gaming, but mixed reality has
                      the potential to transform how work out, hang out, get
                      entertained and more.
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
                  Meta VR Headsets An outstanding experience For more integrated
                  a virtual meta reality{" "}
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
                    <i
                      class="fa-regular fa-eye"
                      style={{ color: "#E30613" }}
                    ></i>
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
                  style={{
                    fontSize: "16px",
                    fontFamily: "Montserrat",
                    fontWeight: "Medium",
                  }}
                >
                  When you put on a Meta Quest headset, you become fully
                  absorbed in immersive experiences, and ones that blend digital
                  content with your physical space. Quest 3 is our most powerful
                  headset yet that unleashes breakthrough mixed reality – from
                  virtual reality, to augmented reality, and everything
                  in-between. You’ve probably heard about its applications for
                  gaming, but mixed reality has the potential to transform how
                  work out, hang out, get entertained and more.
                </p>
              </div>
            </Link>
          </div>
          <div className=" col-md-12">
            <div id="blogk" className="blog pt-3">
              <div className=" blogineer position-relative overflow-hidden ">
                <img
                  src={require("../../images/Rectangle 44.jpg")}
                  className=" w-100 mb-3"
                  alt="blog"
                />
                <div className="bargrag d-flex justify-content-center align-items-center">
                  <p
                    className="mediap"
                    style={{
                      fontSize: "16px",
                      fontFamily: "Montserrat",
                      fontWeight: "Medium",
                    }}
                  >
                    When you put on a Meta Quest headset, you become fully
                    absorbed in immersive experiences, and ones that blend
                    digital content with your physical space. Quest 3 is our
                    most powerful headset yet that unleashes breakthrough mixed
                    reality – from virtual reality, to augmented reality, and
                    everything in-between. You’ve probably heard about its
                    applications for gaming, but mixed reality has the potential
                    to transform how work out, hang out, get entertained and
                    more.
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
                Meta VR Headsets An outstanding experience For more integrated a
                virtual meta reality{" "}
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
          <div className=" col-md-12">
            <div id="bloga" className="blog pt-3">
              <div className=" blogineer position-relative overflow-hidden ">
                <img
                  src={require("../../images/Rectangle 33.jpg")}
                  className=" w-100 mb-3"
                  alt="blog"
                />
                <div className="bargrag d-flex justify-content-center align-items-center">
                  <p
                    className="mediap"
                    style={{
                      fontSize: "16px",
                      fontFamily: "Montserrat",
                      fontWeight: "Medium",
                    }}
                  >
                    When you put on a Meta Quest headset, you become fully
                    absorbed in immersive experiences, and ones that blend
                    digital content with your physical space. Quest 3 is our
                    most powerful headset yet that unleashes breakthrough mixed
                    reality – from virtual reality, to augmented reality, and
                    everything in-between. You’ve probably heard about its
                    applications for gaming, but mixed reality has the potential
                    to transform how work out, hang out, get entertained and
                    more.
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
                Meta VR Headsets An outstanding experience For more integrated a
                virtual meta reality
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
          <div className=" col-md-12">
            <div id="blogr" className="blog pt-3">
              <div className=" blogineer position-relative overflow-hidden ">
                <img
                  src={require("../../images/Rectangle 22.jpg")}
                  className=" w-100 mb-3"
                  alt="blog"
                />
                <div className="bargrag d-flex justify-content-center align-items-center">
                  <p
                    className="mediap"
                    style={{
                      fontSize: "16px",
                      fontFamily: "Montserrat",
                      fontWeight: "Medium",
                    }}
                  >
                    When you put on a Meta Quest headset, you become fully
                    absorbed in immersive experiences, and ones that blend
                    digital content with your physical space. Quest 3 is our
                    most powerful headset yet that unleashes breakthrough mixed
                    reality – from virtual reality, to augmented reality, and
                    everything in-between. You’ve probably heard about its
                    applications for gaming, but mixed reality has the potential
                    to transform how work out, hang out, get entertained and
                    more.
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
                Meta VR Headsets An outstanding experience For more integrated a
                virtual meta reality
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
        </div>
      </div>
    </>
  );
}
