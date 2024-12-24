import React, { useEffect, useState, useRef, forwardRef } from "react";
import gsap from "gsap";

const ServiceItem = ({ service }) => {
  return (
    <div className="service-item py-4 border-l-2 border-customGoldEnd pl-5">
      <div className="flex justify-between items-center">
        <h5 className="text-white">{service.serviceName}</h5>
        <p className="font-semiBold text-lg">{service.price}</p>
      </div>
      <p className="text-sm text-gray-400 mt-1">{service.description}</p>
    </div>
  );
};

const ServiceCategory = forwardRef(({ category, services }, ref) => {
  return (
    <div className="mb-[5rem] category-box" ref={ref}>
      <h2 className="pb-5">{category.toUpperCase()}</h2>
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
});

export default function Services() {
  const [services, setServices] = useState({});
  const [isLoaded, setIsLoaded] = useState(false); 
  const categoryRefs = useRef([]);

  // Fetch Services Data
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setServices(data.services || {});
        setIsLoaded(true); 
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  // GSAP Animation
  useEffect(() => {
    if (isLoaded) {
      categoryRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.from(ref, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            delay: index * 0.2,
          });
        }
      });
    }
  }, [isLoaded]);

  return (
    <div className="bg-customBlack py-[5rem] min-h-screen text-white">
      <div className="container mx-auto p-6 grid ">
        <h1 className="bg-white text-center mb-12 bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
          SERVICES
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[5rem]">
          <div className="grid h-fit">
            {Object.keys(services)
              .filter((category, index) => index < 3) // 첫 3개 카테고리
              .map((category, index) => (
                <ServiceCategory
                  key={category}
                  category={category}
                  services={services[category]}
                  ref={(el) => (categoryRefs.current[index] = el)}
                />
              ))}
          </div>

          <div className="grid">
            {Object.keys(services)
              .filter((category, index) => index >= 3 && index < 6) 
              .map((category, index) => (
                <ServiceCategory
                  key={category}
                  category={category}
                  services={services[category]}
                  ref={(el) => (categoryRefs.current[index + 3] = el)}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
