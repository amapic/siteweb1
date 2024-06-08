import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import ParralaxBackground, {
  TimelinePart2,
  TimelinePartWobblyText,
} from "../components/ParralaxBackground";
import Script from "next/script";
import Navv, { Carousel } from "../components/Navv";


const Home = () => {
  const mouse = useRef(null);

  const textte = [
    "aliqua id dolore veniam",
    "llaboris consectetur esse tempor esse magna deserunt",
    "Lorem id aliquip quis Lorem aliqua sint in eiusmod dolore occaecat pariatur tempor. Minim ex ut eiusmod eiusmod eiusmod mollit est labore sunt. Excepteur fugiat sit duis cupidatat commodo amet fugiat est occaecat labore nostrud ut et tempor aliqua. Deserunt laborum pariatur laborum minim et ex do ea fugiat. ",
    "magna ex aliquip nostrud",
    "fugiat",
    "Laboris aute commodo qui amet elit mollit irure",
    "voluptate",
    "Irure do reprehenderit minim enim consequat eiusmod nisi. Irure sit pariatur ut est exercitation eu commodo minim exercitation sunt sint aute culpa ut esse.",
    "irure",
    "In sit consectetur sit mollit minim fugiat minim magna veniam. Nostrud esse consectetur laborum sunt nulla eiusmod ad et est est esse cillum occaecat et fugiat. Et sit laborum laborum anim consectetur dolore incididunt ullamco enim nulla Lorem laboris magna mollit deserunt. Veniam cupidatat amet anim aliquip nostrud id.",
    "aliquip",
    "Laborum ut amet in aliquip veniam do. Adipisicing ut reprehenderit ut sint laboris. Lorem laboris elit non Lorem proident aliquip sit enim non incididunt. Irure aliquip consequat aute excepteur quis.",
    "Nous contacter",
  ];

  React.useEffect(() => {
    var cursorWidth = 40;

    if (document) {
      TimelinePart2();

      const setX = gsap.quickTo("#mousemove", "x", {
        duration: 0.5,
        ease: "power2",
      });

      const setY = gsap.quickTo("#mousemove", "y", {
        duration: 0.5,
        ease: "power2",
      });

      document.addEventListener("pointermove", (e) => {
        setX(e.clientX - cursorWidth / 2);
        setY(e.clientY - cursorWidth / 2);
      });
    }
  }, []);



  return (
    <>
      <Head>
        <title>Site web Amaury PICHAT</title>
      
        
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-LTCXHF5790"></Script>
         <Script id="google-analytics">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments) }
        gtag('js', new Date());

        gtag('config', 'G-LTCXHF5790');
        `}
        </Script>
   
      <div ref={mouse} id="mousemove">
        <div id="cercle1"></div>
        <div id="cercle2"></div>
      </div>
      <header
        id="header"
        className="shadow bg-white w-100 h-15 position-fixed top-0 left-0 "
      >
        <div
          className="row mx-0 h-100 w-100 justify-content-between"
          style={{
            height: "66px",
          }}
        >
          <div className="col-3">
            <img
              className="pt-2 imgtitle"
              src="/siteWeb1/title.svg"
              style={{
                height: "60px",
              }}
            />
          </div>
          <div className="col-3 mx-0 px-0">
            <nav className="h-100 w-100 d-flex flex-row justify-content-center align-items-center">
              <div
                id="contact"
                className="w-100 h-100 d-flex justify-content-center align-items-center d-none d-sm-flex"
                role="contact"
              >
                Contact
              </div>
              <div
                id="menu"
                className="bg-brown w-100 h-100 text-center d-inline align-middle"
                role="menu"
              >
                Menu
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div id="content" className="parralax">
        <ParralaxBackground />
        <div className="part1">
          <div className="px-3 container mx-auto d-flex flex-column h-100">
            <div className="d-flex flex-row row h-100">
              <div className="col col-12 col-xl-8">
                <h5 className="title text-justify">{textte[0]}</h5>
                <p className="title aclonica text-justify">
                  <h1>{textte[1]}</h1>
                </p>
                <p className="title text-justify">{textte[2]}</p>
              </div>
              <div
                className="col col-4 mx-auto d-none d-xl-block"
                style={{
                  zIndex: "10",
                }}
              >
                <img
                  className="h-75 fadeIn animated"
                  src="/siteWeb1/main.svg"
                  style={{
                    zIndex: "20",
                    position: "relative",
                  }}
                />
              </div>
            </div>
            <div className="h-100 w-50 w-sm-75 mx-auto">
              <div className="my-auto mh-25 bg-blue p-3 mt-3 rounded text-center text-white">
                <h3>{textte[3]}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="part2 bg-grey pb-5">
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
                    transform: "rotate(35deg) scale(0.5)",
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
                    <img className="imglogo mt-2" src="/siteWeb1/budget.png" />

                    <h2 className="ps-3 mb-4">{textte[4]}</h2>
                  </div>

                  <h6>{textte[5]}</h6>
                </div>
              </div>
              <div className=" col-12 col-lg-6 card2 cardd">
                <div className="shadow p-3 m-2 bg-white rounded w-100 h-100">
                  <div className="d-flex flex-row w-100">
                    <img className="imglogo mt-2" src="/siteWeb1/report.png" />

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
    </>
  );
};


export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
