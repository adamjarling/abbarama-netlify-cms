import React from "react";
import Layout from "../../components/Layout";
import TourDates from "../../components/TourDates";
import Footer from "../../components/Footer";
import { tourDates } from "../../tour-dates";

const IndexPage = () => (
  <Layout fullMenu>
    <div id="page-wrapper" className="tour-page">
      <article id="main">
        <header className="tour-page">
          <h2>On Tour...</h2>
          <p>Spreading the music of ABBA across the globe</p>
        </header>
        <section className="wrapper style7">
          <div className="inner">
            <TourDates tourDates={tourDates} />
          </div>
        </section>
      </article>
      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
