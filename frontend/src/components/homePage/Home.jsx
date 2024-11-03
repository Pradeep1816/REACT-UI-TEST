import React from "react";
import ServiceDetails from "../servece-details/ServiceDetails";
import Layout from "../header/Layout";
import FooterBanner from "../footer/FooterBanner";
import ServiceContainer from "../servece-details/ServiceContainer";

function Home() {
  return (
    <Layout>
      <ServiceDetails />
      <ServiceContainer />
      <FooterBanner />
    </Layout>
  );
}

export default Home;
