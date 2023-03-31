import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";

import ParralaxBackground, {
  TimelinePart2,
} from "../components/ParralaxBackground";
const Home = () => {
  const mouse = useRef(null);

  const textte = [
    "aliqua id dolore veniam",
    "laboris consectetur esse tempor esse magna deserunt",
    "Lorem id aliquip quis Lorem aliqua sint in eiusmod dolore occaecat pariatur tempor. Minim ex ut eiusmod eiusmod eiusmod mollit est labore sunt. Excepteur fugiat sit duis cupidatat commodo amet fugiat est occaecat labore nostrud ut et tempor aliqua. Deserunt laborum pariatur laborum minim et ex do ea fugiat. Reprehenderit eiusmod fugiat amet aute excepteur aute fugiat cupidatat labore officia eiusmod sunt adipisicing duis eu.",
    "magna ex aliquip nostrud",
    "fugiat",
    "Laboris aute commodo qui amet elit mollit irure",
    "voluptate",
    "Irure do reprehenderit minim enim consequat eiusmod nisi. Irure sit pariatur ut est exercitation eu commodo minim exercitation sunt sint aute culpa ut esse.",
    "irure",
    "In sit consectetur sit mollit minim fugiat minim magna veniam. Nostrud esse consectetur laborum sunt nulla eiusmod ad et est est esse cillum occaecat et fugiat. Et sit laborum laborum anim consectetur dolore incididunt ullamco enim nulla Lorem laboris magna mollit deserunt. Veniam cupidatat amet anim aliquip nostrud id.",
    "aliquip",
    "Laborum ut amet in aliquip veniam do. Adipisicing ut reprehenderit ut sint laboris. Lorem laboris elit non Lorem proident aliquip sit enim non incididunt. Irure aliquip consequat aute excepteur quis.",
    "Nous contacter"
  ];

  useLayoutEffect(() => {
    var cursorWidth = 40;

    if (document) {
      TimelinePart2();
      // mouse.current=document.getElementById("#mousemove")

      const setX = gsap.quickTo("#mousemove", "x", {
        duration: 0.5,
        ease: "power2",
      });

      const setY = gsap.quickTo("#mousemove", "y", {
        duration: 0.5,
        ease: "power2",
      });

      // const ChangeeEnter = gsap.to(".aa", {
      //   duration: 0.5,
      //   scale: 2,
      //   ease: "power2",
      // });

      // const ChangeeOut = gsap.to(".aa", {
      //   duration: 0.5,
      //   scale: 1,
      //   ease: "power2",
      // });

      document.addEventListener("pointermove", (e) => {
        setX(e.clientX - cursorWidth / 2);
        setY(e.clientY - cursorWidth / 2);
      });
    }
  }, []);

  useEffect(() => {
    document.getElementById("menu").addEventListener("pointerenter", (e) => {
      // gsap.to("#mousemove", {
      //   backgroundColor: "rgba(0,0,0,0)",
      //   height: "50px",
      //   width: "50px",
      //   borderColor: "red",
      //   borderWidth: "5px",
      // });
    });

    document.getElementById("menu").addEventListener("pointerleave", (e) => {
      // gsap.to("#mousemove", {
      //   backgroundColor: "rgba(0,0,0,0.5)",
      //   height: "40px",
      //   width: "40px",
      // });
    });
  });

  return (
    <>
      <ParralaxBackground />

      <div className="overflow-hidden">
        <div ref={mouse} id="mousemove"></div>
        <header
          id="header"
          className="shadow bg-white w-100 h-15 justify-content-between position-fixed top-0 left-0 d-flex flex-row"
        >
          <img className="ps-4 m-2" src="/siteWeb1/title.svg" />
          <nav className="w-20 h-100 d-flex flex-row justify-content-center align-items-center">
            <div
              id="contact"
              className="w-50 h-100 d-flex justify-content-center align-items-center"
            >
              Contact
            </div>
            <div
              id="menu"
              className="bg-brown w-50 h-100 d-flex justify-content-center align-items-center"
            >
              Menu
            </div>
          </nav>
        </header>
        <div id="content" className="parralax">
          <div className="part1 ">
            <div className="container mx-auto d-flex flex-column">
              <div className="d-flex flex-row row ">
                <div className="col col-12 col-xl-8">
                  <h4
                  className="title text-justify"
                  >{textte[0]}</h4><p className="title text-justify">{textte[1]}</p>
                  {textte[2]}
                </div>
                <div
                  className="col col-4 mx-auto d-none d-xl-block"
                  style={{
                    zIndex: "10",
                  }}
                >
                  <img
                    className="h-75"
                    src="/siteWeb1/main.svg"
                    style={{
                      zIndex: "20",
                      position: "relative",
                    }}
                  />
                </div>
              </div>
              <div
              className="w-50 mx-auto p-3 bg-blue rounded h-25 text-center text-white"
              >
                <h3>{textte[3]}</h3>
              </div>
            </div>
          </div>
          <div className="part2 bg-grey position-relative">
            <div className="jauge my-2 position-absolute flex-column">
              <div className="bg-yellow p-1 m-1 row rounded h-25 w-100"></div>
              <div className="bg-yellow p-1 m-1  rounded row h-25 w-100"></div>
              <div className="bg-yellow p-1 m-1  rounded row h-25 w-100"></div>
              <div className="bg-yellow p-1 m-1  rounded row h-25 w-100"></div>
            </div>
            <div className="container w-100 mx-auto d-flex flex-column">
              <div className="row">
                <h1 className="ps-4">{textte[3]}</h1>
                <div>
                  <img
                    src="/siteWeb1/darkBrownSquare.png"
                    height={"50px"}
                    width={"50px"}
                    className="position-absolute"
                    style={{
                      transform: "rotate(35deg) scale(1)",
                      left: "0vh",
                      top: "-40px",
                      zIndex: "20",
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6 card1 cardd">
                  <div className="shadow p-3 m-2 bg-white rounded w-100 h-100">
                    <div className="d-flex flex-row w-100">
                      <img
                        className="imglogo mt-2"
                        src="/siteWeb1/budget.png"
                      />

                      <h2 className="ps-3 mb-4">{textte[4]}</h2>
                    </div>

                    <h6>{textte[5]}</h6>
                  </div>
                </div>
                <div className=" col-12 col-lg-6 card2 cardd">
                  <div className="shadow p-3 m-2 bg-white rounded w-100 h-100">
                    <div className="d-flex flex-row w-100">
                      <img
                        className="imglogo mt-2"
                        src="/siteWeb1/report.png"
                      />

                      <h2 className="ps-3 mb-4">{textte[6]}</h2>
                    </div>

                    <h6>{textte[7]}</h6>
                  </div>
                </div>
                <div className="col-12 col-lg-6 card3 cardd">
                  <div className="shadow p-3 m-2 bg-white rounded w-100 h-100">
                    <div className="d-flex flex-row w-100">
                      <img
                        className="imglogo mt-2"
                        src="/siteWeb1/business.png"
                      />

                      <h2 className="ps-3 mb-4">{textte[8]}</h2>
                    </div>
                    <h6>{textte[9]}</h6>
                  </div>
                </div>
                <div className=" col-12 col-lg-6 card4 cardd">
                  <div className="shadow p-3 m-2 bg-white rounded w-100 h-100">
                    <div className="d-flex flex-row w-100">
                      <img
                        className="imglogo mt-2"
                        src="/siteWeb1/analytics.png"
                      />

                      <h2 className="ps-3 mb-4">{textte[10]}</h2>
                    </div>
                    <h6>{textte[11]}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
