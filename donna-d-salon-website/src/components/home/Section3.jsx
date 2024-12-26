import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote from "/public/image/home/quote.svg";
import reviewsData from "/public/data.json";

gsap.registerPlugin(ScrollTrigger);

function Section3() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    // LG 화면 크기에서만 애니메이션 적용
    ScrollTrigger.matchMedia({
      "(min-width: 1024px)": () => {
        const slides = document.querySelectorAll(".reviews");
        slides.forEach((slide) => {
          gsap.fromTo(
            slide,
            { opacity: 0, y: 50 }, // 시작 상태
            {
              opacity: 1,
              y: 0, // 끝 상태
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: slide,
                start: "top 90%", // 애니메이션 시작 위치
                end: "top 70%", // 애니메이션 종료 위치
                toggleActions: "play none none reverse", // 스크롤 동작 설정
              },
            }
          );
        });
      },
    });

    // Cleanup
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-[100%] grid gap-10 place-content-center bg-black bg-opacity-75 py-10">
      <div className="reviews lg:flex justify-between">
        <div className="flex-1">{""}</div>
        <h2 className="flex-1 justify-self-center text-center bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
          Customer Reviews
        </h2>
        <a
          href="https://www.google.com/search?gs_ssp=eJzj4tZP1zcsSbfMLa6oMGC0UjWoMDVKTTQ3MTQ0SUxOM04yM7UyqLBINTZOSTRMM002tDBONrbw4k_Jz8tLVEhRKC6pzMksLgEAv7cU7A&q=donna+d+stylist&oq=donna+d+s&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyBggAEEUYOTIQCAEQLhivARjHARiABBiOBTIHCAIQLhiABDINCAMQLhivARjHARiABDIKCAQQABgKGBYYHjIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDM5NDZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x52ea74114acf3b65:0x8e33da1f5c183c38,1,,,,"
          className="lg:flex flex-1 group justify-end hidden"
        >
          <p className="group-hover:text-customGoldStart pr-3 duration-300">
            View Google Reviews
          </p>
          <p className="group-hover:-rotate-6 rotate-45 text-xl group-hover:text-customGoldStart duration-300 transition-transform">
            ↗
          </p>
        </a>
      </div>
      <Slider
        {...settings}
        className="container w-full overflow-hidden mx-auto"
      >
        {Object.values(reviewsData.reviews).map((review, index) => {
          const isExpanded = expanded[index];
          const content = isExpanded
            ? review.content
            : review.content.slice(0, 150) +
              (review.content.length > 150 ? "..." : "");

          return (
            <div key={index} className="review-slide w-full p-5">
              <div className="flex items-center">
                <div className="h-fit bg-white p-5 rounded-xl shadow-lg items-center">
                  <div className="gap-3 grid items-center">
                    <img
                      src={quote}
                      alt="Quote icon"
                      className="max-w-[2rem] mb-2 mx-auto"
                    />
                    <p className="text-black text-center italic">
                      {content}{" "}
                      {review.content.length > 150 && (
                        <button
                          onClick={() => toggleExpand(index)}
                          className="text-sm underline mt-2"
                        >
                          {isExpanded ? "Show less" : "Read more"}
                        </button>
                      )}
                    </p>
                    <p className="text-black text-center">
                      - {review.reviewer}
                    </p>
                  </div>
                  {/* Display image dynamically */}
                  <div className="lg:hidden">
                    <img
                      src={review.image}
                      alt={`${review.reviewer}'s profile`}
                      className="object-cover rounded-full w-32 h-32 mx-auto"
                    />
                  </div>
                </div>
                <div className="hidden lg:block">
                  <img
                    src={review.image}
                    alt={`${review.reviewer}'s profile`}
                    className="border border-customGoldStart -translate-x-3 max-w-[40rem] w-full h-auto object-cover mx-auto"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Section3;
