import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import gsap, { Power3 } from "gsap";

// import "./App.css"
let callCount = 0;

const Home = () => {
  const root = useRef(null);

  // const circleToHover = useRef(null);

  const [state, setState] = useState(false);

  useEffect(() => {
    console.log(
      "useEffect() call",
      ++callCount,
      "(React 18 strict mode calls twice!)"
    );
  });

  useLayoutEffect(() => {
    let circleToHover = null || document.querySelector(".circleToHover");

    let ctx = gsap.context((self) => {
      // use any arbitrary string as a name; it'll be added to the Context object, so in this case you can call ctx.onClick() later...
      self.add("onClick", (e) => {
        gsap.to(".circleToHover", { borderColor: "pink" }); // <-- gets added to the Context!
      });
    }, root);

    circleToHover.addEventListener("click", (e) => ctx.onClick(e));

    const setX = gsap.quickTo("#mousemove", "x", {
      duration: 0.5,
      ease: "power2",
    });

    const setY = gsap.quickTo("#mousemove", "y", {
      duration: 0.5,
      ease: "power2",
    });

    document.addEventListener("pointermove", (e) => {
      setX(e.clientX);
      setY(e.clientY);
    });
  }, []);

  return (
    <div className="App" ref={root}>
      <div className="wrapper">
        <div
          className="circleToHover"
          // onMouseEnter={() => handlePlay()}
          // ref={circleToHover}
          style={{
            backgroundColor: "blue",
            width: "100px",
            height: "100px",
            position: "fixed",
            top: "0",
            left: "0",
            pointerEvents: "none",
            borderRadius: "999px",
            // borderColor: "red",
            border: "12px solid red",
          }}
        ></div>
        <div
          id="mousemove"
          style={{
            backgroundColor: "transparent",
            width: "100px",
            height: "100px",
            position: "fixed",
            top: "0",
            left: "0",
            pointerEvents: "none",
            borderRadius: "999px",
            // borderColor: "red",
            border: "12px solid red",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
