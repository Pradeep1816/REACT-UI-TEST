import React from "react";
import services from "../../serviceData.json";
import ServiceCard from "./UI/ServiceCard";
function ServiceContainer() {
  return (
    <div className="py-5">
      <h2 className="mb-5 font-bold text-3xl">Company Secretary Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {services.map((service, ind) => {
          return <ServiceCard service={service} />;
        })}
      </div>
    </div>
  );
}

export default ServiceContainer;
