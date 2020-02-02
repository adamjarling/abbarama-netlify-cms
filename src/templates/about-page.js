import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Footer from "../components/Footer";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    // <Layout>
    //   <AboutPageTemplate
    //     contentComponent={HTMLContent}
    //     title={post.frontmatter.title}
    //     content={post.html}
    //   />
    // </Layout>
    <Layout fullMenu>
      <div id="page-wrapper" className="about-page">
        <article id="main">
          <header class="about-page">
            <h2>About</h2>
            <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
          </header>
          <section className="wrapper style7">
            <div className="inner">
              <p>
                Super-stylish pop sensation ABBARAMA brings the Modern ABBA
                Tribute Experience to stages around the world!
              </p>

              <p>
                Get ready to sing-along to all your favorite ABBA songs – Gimme!
                Gimme! Gimme!, Mamma Mia, Dancing Queen, Take A Chance on Me,
                Super Trouper, Waterloo, The Winner Takes it All and so many
                more!
              </p>

              <p>
                The live band ABBARAMA celebrate the music of ABBA adding an
                electronic dance vibe to ABBA’s classic pop songs!
              </p>

              <p>
                Delivered with contagious energy and video projections by{" "}
                <a href="https://kiiarens.com/" target="_blank">
                  KII Arens
                </a>{" "}
                (Lady Gaga, Katy Perry) this unique Pop Art experience is an
                exciting contemporary take on the fashion and style of ABBA.
              </p>

              <p>
                “We all grew up listening to ABBA, and started ABBARAMA because
                we love the music and wanted to bring you the best show in the
                world!”
              </p>

              <p>
                The incredible legacy ABBA gave the world is alive on stage.
                Welcome to the Future of 1973. It’s ABBARAMA!
              </p>
            </div>
          </section>
          <section className="wrapper style1">
            <div className="inner">
              <h3>Fan &amp; Live Reviews</h3>

              <blockquote>
                “It was like watching the real ABBA! We all sang along ABBA
                hits”
              </blockquote>

              <blockquote>
                “Loved it! Enjoyed the show. Love the songs. Great sing alongs”
              </blockquote>

              <blockquote>
                “The vocals were authentic, the sound was amazing and the band
                members were very personable and connected well with the crowd!”
              </blockquote>

              <blockquote>“Wonderful show with great energy”</blockquote>

              <blockquote>
                “Loved it. Great fun loving crowd too. If you get a chance to
                see them you should”
              </blockquote>

              <div class="center">
                <a href="pdf/abbarama-one-sheet-v5.pdf" class="button primary">
                  Download EPK
                </a>
              </div>
            </div>
          </section>
        </article>
        <Footer />
      </div>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
