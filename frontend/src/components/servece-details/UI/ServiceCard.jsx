import React from "react";

function ServiceCard({ service }) {
  console.log(service);
  return (
    <div className="border h-56 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
      <div
        className="h-[50%] bg-cover bg-center rounded-t-lg bg-opacity-10"
        style={{
          backgroundImage: `url(${service.image})`,
        }}
      >
        <h2 className="ml-3 text-white font-bold">{service.title}</h2>
      </div>
      <p className="p-2">
        <ul className="list-disc pl-4">
          {service.services.map((serviceItem, ind) => (
            <li key={ind} className="text-[10px]">
              {serviceItem}
            </li>
          ))}
        </ul>
      </p>
    </div>
  );
}

export default ServiceCard;
