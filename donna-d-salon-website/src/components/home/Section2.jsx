import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import services1 from "/public/image/home/services/services1.png";
import services2 from "/public/image/home/services/services2.png";
import services3 from "/public/image/home/services/services3.png";
import services4 from "/public/image/home/services/services4.png";

gsap.registerPlugin(ScrollTrigger);

function Section2() {
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: lineRef.current, 
        start: "top bottom", 
        once: true, 
      },
    });

    // Line animation
    timeline.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1, transformOrigin: "left", ease: "power2.out" }
    );

    // Sequential fade-in of items
    itemsRef.current.forEach((item, index) => {
      timeline.fromTo(
        item,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        `-=${0.5 - index * 0.1}` // 순차적인 애니메이션
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="grid gap-10 lg:gap-[5rem] place-content-center items-center bg-black bg-opacity-75 lg:h-[70vh] py-[5rem]">
      <h2 className="text-center bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
        Our Services
      </h2>
      <div>
        <div className="relative grid px-10 lg:px-0">
          {/* Line */}
          <div className="hidden lg:absolute inset-x-0 -translate-y-[1.8rem] top-1/2 transform lg:flex items-center">
            <div className="w-2 h-2 bg-customGoldStart rounded-full"></div>
            <div
              ref={lineRef}
              className="flex-grow h-0.5 bg-customGoldStart scale-x-0"
            ></div>
            <div className="w-2 h-2 bg-customGoldStart rounded-full"></div>
          </div>

          {/* Images */}
          <div className="md:flex grid gap-10 grid-cols-2 items-start relative xl:gap-[7rem] 2xl:gap-[10rem] xl:px-[4rem] 2xl:px-[8rem]">
            {[
              { img: services1, title: "Men’s Haircuts" },
              { img: services2, title: "Women’s Haircuts" },
              { img: services3, title: "Hair Colour" },
              { img: services4, title: "Kerasilk" },
            ].map((service, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="grid place-items-center text-center gap-3 opacity-0"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="max-w-[11rem] w-full h-auto"
                />
                <p>{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
