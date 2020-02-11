import React from "react";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import tkoLogo from "../../images/TKO-Logo.png";

const IndexPage = () => (
  <Layout fullMenu>
    <div id="page-wrapper" className="booking-page">
      <article id="main">
        <header className="booking-page">
          <h2>Booking</h2>
          <p>Worldwide artist representation</p>
        </header>
        <section className="wrapper style7">
          <div className="inner align-center">
            <h3>World wide booking</h3>
            <img src={tkoLogo} className="tko-logo" alt="TKO Booking" />

            <address style={{ marginBottom: "3rem" }}>
              LOS ANGELES * NEW YORK * LONDON
              <br /> LA: (310) 273-9200 NY: (914) 346-8938
              <br />
              <a
                href="http://www.tkoco.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.tkoco.com
              </a>{" "}
              /<a href="mailto:jimlenz@tkoco.com">jimlenz@tkoco.com</a>
            </address>

            <ul className="actions fit">
              <li>
                <a
                  href="pdf/abbarama-one-sheet-v5.pdf"
                  className="button primary fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download EPK
                </a>
              </li>
            </ul>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
