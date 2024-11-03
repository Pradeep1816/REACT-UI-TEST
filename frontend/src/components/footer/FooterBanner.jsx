import React from "react";

function FooterBanner() {
  return (
    <div
      className="w-full h-[300px] my-10 bg-cover bg-center flex flex-col items-center justify-center gap-5"
      style={{
        backgroundImage: ` url("/images/footer_banner.jpeg")`,
      }}
    >
      <div className="md:w-[450px]">
        <h2 className=" font-bold text-3xl md:text-5xl text-center text-white">
          See what we can do for you firm
        </h2>
      </div>
      <div className="mt-5">
        <button className="border bg-white p-2 rounded-full transition-transform duration-300 hover:bg-blue-700 hover:scale-105 hover:text-white">
          Scheduale a Expert call
        </button>
      </div>
    </div>
  );
}

export default FooterBanner;
