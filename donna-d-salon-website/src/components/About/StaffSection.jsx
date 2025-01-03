import React from "react";
import { staffs } from "../../../public/data.json";

export default function StaffSection() {
  return (
    <div className="min-h-screen bg-customBlack text-white">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center grid py-8">
          <h3>Meet</h3>
          <h1 className="bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
            Our Staff
          </h1>
          <p className="font-Aboreto">Get to know our team</p>
        </div>

        {/* Face Balls */}
        <div className="hidden md:flex flex-wrap justify-center gap-10 lg:gap-[5rem] p-4">
          {staffs.map((staff, index) => (
            <div
              key={index}
              className="w-32 h-32 border-[3px] rounded-full overflow-hidden border-customGoldStart"
            >
              <img
                src={staff.image}
                alt={staff.name}
                className="w-full h-full object-cover translate-y-6 scale-150"
              />
            </div>
          ))}
        </div>

        {/* Staff Details */}
        <div className="grid gap-8 p-4">
          {staffs.map((staff, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-8 bg-white bg-opacity-5 p-6 rounded-lg"
            >
              {/* Staff Image */}
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="rounded-lg w-3/4 object-cover"
                />
              </div>

              {/* Staff Details */}
              <div className="w-full md:w-2/3 gap-4">
                <h2 className="font-bold mb-2">{staff.name}</h2>
                <h2 className="text-customGoldStart text-xl mb-2">
                  {staff.role}
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  {staff.description}
                </p>

                {/* Additional Details */}
                {staff.certificates && (
                  <div className="mb-4">
                    <h4 className="text-lg font-bold mb-2">Certificates:</h4>
                    <ul className="list-disc pl-6">
                      {staff.certificates.map((cert, idx) => (
                        <li key={idx} className="text-lg">
                          <p>{cert}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {staff.trainings && (
                  <div className="mb-4">
                    <h4 className="text-lg font-bold mb-2">Trainings:</h4>
                    <ul className="list-disc pl-6">
                      {staff.trainings.map((training, idx) => (
                        <li key={idx} className="text-lg">
                          <p>{training}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {staff.awards && (
                  <div>
                    <h4 className="text-lg font-bold mb-2">Awards:</h4>
                    <ul className="list-disc pl-6">
                      {staff.awards.map((award, idx) => (
                        <li key={idx} className="text-lg">
                          <p>{award}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
