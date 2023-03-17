import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import gsap, { Power3 } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";

import ParralaxBackground from "../siteWeb1/ParralaxBackground";
const Home = () => {
  const root = useRef(null);

  const [state, setState] = useState(false);

  useEffect(() => {
    // console.log("useEffect() call", "(React 18 strict mode calls twice!)");
  });


  return (
    <>
      <ParralaxBackground />
      <div>
        <header
          id="header"
          className="shadow bg-white w-100 h-15 justify-content-between position-fixed top-0 left-0 d-flex flex-row"
        >
          <img className="ps-4 m-2" src="title.svg" />
          <nav className="w-20 h-100 d-flex flex-row justify-content-center align-items-center">
            <div className="w-50 h-100 d-flex justify-content-center align-items-center">
              Contact
            </div>
            <div className="bg-orange w-50 h-100 d-flex justify-content-center align-items-center">
              Menu
            </div>
          </nav>
        </header>
        <div id="content">
          <div className="container mx-auto d-flex flex-row">
            <div
            className="d-flex flex-row row"
            >
              <div className="col col-8">
                <h4>Agence web à Lyon</h4>
                <p className="title">
                  Spécialistes en développement de solutions digitales sur
                  mesure
                </p>
                Création de site Internet, développement d'outils digitaux et
                d'applications mobiles, nous accompagnons les professionnels qui
                désirent gagner en visibilité, en productivité, et en
                efficacité. Découvrez nos services
              </div>
              <div className="col col-4 mx-auto d-none d-lg-block">
                <img 
                className="h-75"
                src="/siteWeb1/main.svg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
