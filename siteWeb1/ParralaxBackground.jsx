import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParralaxBackground() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".parralax",
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers:true
        },
      });

      gsap.utils.toArray(".kibouge").forEach((layer) => {
        const speed = layer.dataset.speed;
        const movement = -(layer.offsetHeight * speed);
        tl.to(layer, { y: movement, ease: "none" }, 0);
      });
    });

    return () => ctx.revert();
  });

  return (
    <>
      <img
        ref={ref}
        src="/siteWeb1/brownCircle.png"
        height={"50px"}
        width={"50px"}
        className="position-fixed kibouge"
        style={{
          transform: "scale(2)",
          left: "10vh",
          top:"15vh",
          zIndex:"100"
        }}
        data-speed="0.6"
      />
      <img
        ref={ref2}
        src="/siteWeb1/brownSquare.png"
        height={"50px"}
        width={"50px"}
        className="position-fixed kibouge"
        data-speed="0.6"
        style={{
          transform: "rotate(45deg) scale(2)",
          right: "10vh",
          top: "20vh",
        }}
      />
      {/* <img
        ref={ref}
        src="/siteWeb1/brownCircle.png"
        height={"50px"}
        width={"50px"}
        className="position-fixed kibouge"
        style={{
          transform: "scale(0.5)",
          right: "20vh",
          top:"15vh",
          zIndex:"100"
        }}
        data-speed="0.6"
      /> */}
      <img
        ref={ref3}
        src="/siteWeb1/darkBrownSquare.png"
        height={"50px"}
        width={"50px"}
        className="position-fixed kibouge"
        data-speed="0.9"
        style={{
          transform: "rotate(5deg) scale(3)",
          right: "-5vh",
          bottom: "20vh",
        }}
      />
      <img
        // ref={ref3}
        src="/siteWeb1/darkBrownSquare.png"
        height={"50px"}
        width={"50px"}
        className="position-fixed kibouge"
        data-speed="0.3"
        style={{
          transform: "rotate(5deg) scale(1)",
          right: "50vh",
          top: "10vh",
          zIndex:"100"
        }}
      />
    </>
  );
}

export function TimelinePart2() {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".card1",
      start: "top bottom",
      end: "bottom bottom",
      once: true,
    },
  });

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".card2",
      start: "top bottom",
      end: "bottom bottom",
      once: true,
    },
  });

  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".card3",
      start: "top bottom",
      end: "bottom bottom",
      once: true,
    },
  });

  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".card4",
      start: "top bottom",
      end: "bottom bottom",
      once: true,
    },
  });

  const tlJauge = gsap.timeline({
    scrollTrigger: {
      trigger: ".jauge",
      start: "bottom bottom",
      end: "bottom bottom",
      once: true,
      // markers:true
    },
  });

  tlJauge.fromTo(".jauge div:nth-child(1)", {
    opacity: 0,
  },
  {
    opacity: 1,
    // backgroundColor:"red",
    duration:"0.5"
  },">0.5");

  tlJauge.fromTo(".jauge div:nth-child(2)", {
    opacity: 0,
  },{
    opacity: 1,
    backgroundColor:"red",
    duration:"1"
  },">0.5");

  tlJauge.fromTo(".jauge div:nth-child(3)",{
    opacity: 0,
  }, {
    opacity: 1,
    backgroundColor:"red",
    duration:"3"
  },">0.5");

  tlJauge.fromTo(".jauge div:nth-child(4)",{
    opacity: 0,
  }, {
    opacity: 1,
    backgroundColor:"red"
  },">0.5");

  tl.fromTo(
    ".card1 div",
    {
      opacity: 0,
      y: "150px",
      duration:"3"
    },
    {
      opacity: 1,
      y: "0px",
    }

    // "0.4"
  );

  tl2.fromTo(
    ".card2 div",
    {
      opacity: 0,
      y: "150px",
      duration:"3"
    },
    {
      opacity: 1,
      y: "0px",
    }
    // "0.5"
  );

  tl3.fromTo(
    ".card3 div",
    {
      opacity: 0,
      y: "150px",
    },
    {
      opacity: 1,
      y: "0px",
    }
    // "0.6"
  );

  tl4.fromTo(
    ".card4 div",
    {
      opacity: 0,
      y: "150px",
    },
    {
      opacity: 1,
      y: "0px",
    }
    // "0.7"
  );
}
// }
