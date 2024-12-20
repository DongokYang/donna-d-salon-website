import React, { useEffect, useState } from "react";

function ServiceItem({ service }) {
  return (
    <div className="border rounded-lg p-4 mb-4 bg-white shadow-md transition-transform hover:scale-105">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <h4 className="text-lg font-semibold text-gray-800">
          {service.serviceName}
        </h4>
        <span className="text-sm font-medium text-gray-500">
          {service.price}
        </span>
      </div>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
}

export default function Services() {
  const [services, setServices] = useState([]);

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

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Services
      </h2>
      {Object.keys(services).map((category) => (
        <div key={category} className="service-category mb-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2">
            {category.toUpperCase()}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services[category].map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
