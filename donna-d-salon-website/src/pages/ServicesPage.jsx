import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

function ServiceItem({ service }) {
  return (
    <div className="rounded-sm p-4 mb-4 bg-white bg-opacity-95">
      <div className="flex justify-between items-center pb-2">
        <h4 className="text-lg font-semibold text-gray-800">
          {service.serviceName}
        </h4>
        <p className="font-medium text-customGrayDark">{service.price}</p>
      </div>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
}

export default function Services() {
  const [services, setServices] = useState([]);
  const categoryRefs = useRef([]); // 각 카테고리의 묶음 참조를 저장

  // Fetch the JSON data
  useEffect(() => {
    fetch("/data.json") // Ensure your data.json is placed in the `public` folder
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((data) => setServices(data.services || []))
      .catch((error) => console.error(error));
  }, []);

  // GSAP Animation
  useEffect(() => {
    if (categoryRefs.current.length > 0) {
      gsap.fromTo(
        categoryRefs.current, // 모든 카테고리 묶음에 애니메이션 적용
        { opacity: 0, y: 50 }, // 시작 상태
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3, // 카테고리 묶음 간의 애니메이션 순차적 실행
          ease: "power3.out",
        }
      );
    }
  }, [services]); // 서비스 데이터가 로드된 후 실행

  return (
    <div className="bg-black">
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
          Our Services
        </h2>
        {Object.keys(services).map((category, index) => (
          <div
            key={category}
            ref={(el) => (categoryRefs.current[index] = el)} // 각 카테고리의 부모 요소를 참조
            className="service-category mb-10 opacity-0 translate-y-10" // 초기 상태
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2 bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
              {category.toUpperCase()}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {services[category].map((service) => (
                <ServiceItem key={service.id} service={service} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
