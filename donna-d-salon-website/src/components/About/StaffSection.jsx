import React, { useState } from "react";
import { staffs } from "../../../public/data.json";

export default function StaffSection() {
  const [selectedStaff, setSelectedStaff] = useState(staffs[0]); // Default to the first staff member

  return (
    <div className="min-h-screen bg-customBlack text-white">
      {/* Title */}
      <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent py-8">
        Meet Our Staff
      </h1>

      {/* Face Balls */}
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {staffs.map((staff, index) => (
          <div
            key={index}
            className={`w-32 h-32 border-4 rounded-full overflow-hidden cursor-pointer ${
              selectedStaff.name === staff.name
                ? "border-customGoldStart"
                : "border-gray-500"
            }`}
            onClick={() => setSelectedStaff(staff)}
          >
            <img
              src={staff.image}
              alt={staff.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Selected Staff Details */}
      <div className="flex flex-col md:flex-row items-center mt-8 p-8 gap-8">
        {/* Staff Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={selectedStaff.image}
            alt={selectedStaff.name}
            className="rounded-lg w-3/4 object-cover"
          />
        </div>

        {/* Staff Details */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">{selectedStaff.name}</h2>
          <h3 className="text-xl text-customGoldStart font-semibold mb-4">
            {selectedStaff.role}
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            {selectedStaff.description}
          </p>

          {/* Additional Details */}
          {selectedStaff.certificates && (
            <div className="mb-4">
              <h4 className="text-lg font-bold mb-2">Certificates:</h4>
              <ul className="list-disc pl-6">
                {selectedStaff.certificates.map((cert, idx) => (
                  <li key={idx} className="text-lg">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedStaff.trainings && (
            <div className="mb-4">
              <h4 className="text-lg font-bold mb-2">Trainings:</h4>
              <ul className="list-disc pl-6">
                {selectedStaff.trainings.map((training, idx) => (
                  <li key={idx} className="text-lg">
                    {training}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedStaff.awards && (
            <div>
              <h4 className="text-lg font-bold mb-2">Awards:</h4>
              <ul className="list-disc pl-6">
                {selectedStaff.awards.map((award, idx) => (
                  <li key={idx} className="text-lg">
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
