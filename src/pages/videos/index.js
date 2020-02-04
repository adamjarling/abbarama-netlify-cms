import React from "react";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";

const IndexPage = () => (
  <Layout fullMenu>
    <div id="page-wrapper" className="videos-page">
      <article id="main">
        <header className="videos-page">
          <h2>Videos</h2>
          <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
        </header>
        <section className="wrapper style7">
          <div className="inner">
            <div className="row gtr-100 gtr-uniform">
              <div className="col-12">
                <span className="image fit videoWrapper">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/XPiPIyvae74"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </span>
              </div>
              <div className="col-12">
                <span className="image fit videoWrapper">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/sOcnP9ca14w"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </span>
              </div>
              <div className="col-12">
                <span className="image fit videoWrapper">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ecmvH0mHbfY"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </span>
              </div>
              <div className="col-12">
                <span className="image fit videoWrapper">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/qxAQeLXEAXE"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </span>
              </div>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
