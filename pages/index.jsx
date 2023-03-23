import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import gsap, { Power3 } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";

import { LoremIpsum } from "lorem-ipsum";

import ParralaxBackground, {
  TimelinePart2,
} from "../siteWeb1/ParralaxBackground";
import Part2 from "../siteWeb1/Part2";
const Home = () => {
  const mouse = useRef(null);

  const [state, setState] = useState(false);

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  useLayoutEffect(() => {
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

      // const ChangeeEnter = gsap.to(".aa", {
      //   duration: 0.5,
      //   scale: 2,
      //   ease: "power2",
      // });

      const ChangeeOut = gsap.to(".aa", {
        duration: 0.5,
        scale: 1,
        ease: "power2",
      });

      document.addEventListener("pointermove", (e) => {
        setX(e.clientX - cursorWidth / 2);
        setY(e.clientY - cursorWidth / 2);
      });

      document.getElementById("menu").addEventListener("pointerenter", (e) => {
        // console.log(e.target)
        mouse.current.classList.add("aa");
      });

      document.getElementById("menu").addEventListener("pointerout", (e) => {
        // console.log(e)
        mouse.current.classList.remove("aa");
      });
    }
  }, []);

  return (
    <>
      <ParralaxBackground />
      <div ref={mouse} id="mousemove"></div>
      <div className="overflow-hidden">
        <header
          id="header"
          className="shadow bg-white w-100 h-15 justify-content-between position-fixed top-0 left-0 d-flex flex-row"
        >
          <img className="ps-4 m-2" src="title.svg" />
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
          <div className="part1">
            <div className="container mx-auto d-flex flex-column">
              <div className="d-flex flex-row row">
                <div className="col col-8">
                  <h4>{lorem.generateWords(4)}</h4>
                  <p className="title">
                    {/* Spécialistes en développement de solutions digitales sur
                    mesure */}
                    {lorem.generateWords(7)}
                  </p>
                  {/* Création de site Internet, développement d'outils digitaux et
                  d'applications mobiles, nous accompagnons les professionnels
                  qui désirent gagner en visibilité, en productivité, et en
                  efficacité. Découvrez nos services */}
                  {lorem.generateParagraphs(1)}
                </div>
                <div className="col col-4 mx-auto d-none d-lg-block">
                  <img className="h-75" src="/siteWeb1/main.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="part2 bg-grey position-relative">
            <div className="jauge w-5 h-100 my-2 position-absolute flex-column">
              <div className="bg-yellow p-1 m-1 row rounded h-25 w-100"></div>
              <div className="bg-yellow p-1 m-1  rounded row h-25 w-100"></div>
              <div className="bg-yellow p-1 m-1  rounded row h-25 w-100"></div>
              <div className="bg-yellow p-1 m-1  rounded row h-25 w-100"></div>
            </div>
            <div className="container w-100 mx-auto d-flex flex-column">
              <div className="row">
                <h1 className="ps-4">{lorem.generateWords(4)}</h1>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6 card1 cardd">
                  <div className="shadow p-3 m-2 bg-white rounded w-100 h-100">
                    <div className="d-flex flex-row w-100">
                      <img
                        className="imglogo mt-2"
                        src="siteWeb1/logo/budget.png"
                      />

                      <h2 className="ps-3 mb-4">{lorem.generateWords(1)}</h2>
                    </div>

                    <h6>{lorem.generateSentences(1)}</h6>
                  </div>
                </div>
                <div className=" col-12 col-lg-6 card2 cardd">
                  <div className="shadow p-3 m-2 bg-white rounded w-100 h-100">
                    <div className="d-flex flex-row w-100">
                      <img
                        className="imglogo mt-2"
                        src="siteWeb1/logo/report.png"
                      />

                      <h2 className="ps-3 mb-4">{lorem.generateWords(1)}</h2>
                    </div>

                    <h6>{lorem.generateSentences(2)}</h6>
                  </div>
                </div>
                <div className=" col-12 col-lg-6 card3 cardd">
                  <div className="shadow p-3 m-2 bg-white rounded w-100 h-100">
                    <div className="d-flex flex-row w-100">
                      <img
                        className="imglogo mt-2"
                        src="siteWeb1/logo/business.png"
                      />

                      <h2 className="ps-3 mb-4">{lorem.generateWords(1)}</h2>
                    </div>
                    <h6>{lorem.generateSentences(4)}</h6>
                  </div>
                </div>
                <div className=" col-12 col-lg-6 card4 cardd">
                  <div className="shadow p-3 m-2 bg-white rounded w-100 h-100">
                    <div className="d-flex flex-row w-100">
                      <img
                        className="imglogo mt-2"
                        src="siteWeb1/logo/analytics.png"
                      />

                      <h2 className="ps-3 mb-4">{lorem.generateWords(1)}</h2>
                    </div>
                    <h6>{lorem.generateSentences(4)}</h6>
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
