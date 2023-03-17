import { useEffect, useRef } from "react";
import {gsap} from "gsap";

import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
// import ScrollSmoother from "gsap/dist/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollSmoother);

export default function ParralaxBackground() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".container",
          start: "top top",
          end: "bottom top",
          scrub: true,
          // markers:true
        }
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
        height={"100px"}
        width={"100px"}
        className="position-fixed kibouge"
        style={{
          transform: "rotate(45deg)",
          left: "10vh",
        }}
        data-speed="0.10"
      />
      <img
        ref={ref2}
        src="/siteWeb1/brownSquare.png"
        height={"100px"}
        width={"100px"}
        className="position-fixed kibouge"
        data-speed="0.20"
        style={{
          transform: "rotate(45deg)",
          right: "10vh",
          top: "20vh",
        }}
      />
      <img
        ref={ref3}
        src="/siteWeb1/darkBrownSquare.png"
        height={"100px"}
        width={"100px"}
        className="position-fixed kibouge"
        data-speed="0.50"
        style={{
          transform: "rotate(5deg)",
          right: "10vh",
          bottom: "20vh",
        }}
      />
    </>
  );
}
