import React, { useEffect, useState } from "react";

function ServiceItem({ service }) {
  return (
    <div className="service-item py-4 border-l-2 border-customGold pl-4">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold text-white">
          {service.serviceName}
        </h4>
        <p className=" font-bold text-lg">{service.price}</p>
      </div>
      <p className="text-sm text-gray-400 mt-1">{service.description}</p>
    </div>
  );
}

function ServiceCategory({ category, services }) {
  return (
    <div className="mb-10">
      <h1 className="text-2xl font-bold text-customGold mb-6">
        {category.toUpperCase()}
      </h1>
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
}

export default function Services() {
  const [services, setServices] = useState({});

  // Fetch Services Data
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setServices(data.services || {});
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="bg-black pt-[5rem] min-h-screen text-white">
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent ">
          SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.keys(services).map((category) => (
            <ServiceCategory
              key={category}
              category={category}
              services={services[category]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
