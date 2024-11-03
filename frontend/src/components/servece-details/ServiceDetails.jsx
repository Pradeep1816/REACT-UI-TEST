import React from "react";
import Layout from "../header/Layout";

function ServiceDetails() {
  return (
    <div className="py-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col items-center">
          <div className="mt-10">
            <h2 className="font-bold text-3xl my-1">Services Details</h2>
            <p className="text-sm">
              At More Daliya & Associates, we offer expert corporate and
              financial advisory services, ensuring your business stays
              compliant while driving growth. With a focus on corporate
              governance and capital markets, we help businesses thrive with
              confidence.
            </p>
            <div className="mt-2 ">
              <button className="border px-3 py-2 rounded-full bg-stone-900 text-white transition-transform transition-colors duration-300 hover:bg-blue-700 hover:scale-105">
                Get started
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <figure>
            <img
              src="/images/service-image.jpeg"
              alt=""
              className="h-[250px] rounded-lg"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
