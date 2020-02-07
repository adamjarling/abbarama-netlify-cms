import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import logo from "../images/logo-teal.png";
import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import Scroll from "../components/Scroll";
import config from "../../config";
import poster from "../images/posters/2020-03-10-roa.jpg";
import photosHolder from "../photos/RVS02391-Edit-lo-res.jpg";
import TourDates from "../components/TourDates";
import Footer from "../components/Footer";
import { BrowserView } from "react-device-detect";
import { tourDates } from "../tour-dates";
import logoLong from "../images/logo-teal-long.png";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div id="page-wrapper">
    <section id="banner">
      <div className="inner">
        {/* <h2>{config.heading}</h2> */}
        <h2>
          <img src={logo} className="home-logo" alt="ABBARAMA logo" />
        </h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <BrowserView>
          <header className="major">
            <h2>The story...</h2>
          </header>
        </BrowserView>

        <p>
          Super-stylish pop sensation ABBARAMA brings the Modern ABBA Live
          Experience to stages around the world!
        </p>

        <p>
          Get ready to sing-along to all your favorite ABBA songs – Gimme!
          Gimme! Gimme!, Mamma Mia, Dancing Queen, Take A Chance on Me, Super
          Trouper, Waterloo, The Winner Takes it All and so many more. The live
          band ABBARAMA celebrates the music of ABBA adding an electronic dance
          vibe to ABBA’s classic pop songs!
        </p>

        <p>
          Delivered with contagious energy and video projections by Kii Arens
          (Elton John, Kacey Musgraves, Lady Gaga) this unique Pop Art
          experience is an exciting contemporary take on the fashion and style
          of ABBA.
        </p>

        <p>
          <em>
            “We all grew up listening to ABBA, and started ABBARAMA because we
            love the music and wanted to bring you the best show in the world!”
          </em>{" "}
          - Josephine Forsman.
        </p>

        <p>
          The incredible legacy ABBA gave the world is alive and on stage.
          Welcome to the Future of 1973. It’s...
        </p>
        <img src={logoLong} alt="ABBARAMA logo" className="home-about-logo" />
      </div>
    </section>

    <section id="feature" className="wrapper style8 special">
      <div className="inner">
        <div className="box alt">
          <div className="row gtr-50 gtr-uniform">
            <div className="col-12">
              <span className="image fit">
                <img src={poster} alt="Rock of Ages" />
              </span>
              <a
                href="https://www.eventbrite.com/e/abbarama-tickets-93022736509"
                target="_blank"
                className="button primary"
              >
                Get Tickets
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="tour-dates" className="wrapper style5 special">
      <div className="inner">
        <header className="major">
          <h2>On Tour</h2>
        </header>
        <TourDates tourDates={tourDates} />
      </div>
      <Link to="/tour" className="button primary">
        View all tour dates
      </Link>
    </section>

    <section id="two" className="wrapper alt style3">
      <section className="spotlight">
        <div className="image">
          <div className="videoWrapper">
            <iframe
              width="640"
              height="480"
              src="https://www.youtube.com/embed/XPiPIyvae74"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="content">
          <h2>Hej! Kolla in vår nya video!</h2>
          <p>(Hey, check out our new video)!</p>
          <p>
            <Link to="/videos" className="button primary">
              Watch videos
            </Link>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <Link to="/photos">
            <img src={photosHolder} alt="ABBARAMA photos" />
          </Link>
        </div>
        <div className="content">
          <h2>Photos</h2>
          <p>Fashion, art, music, photos</p>
          <p>
            <Link to="/photos" className="button primary">
              Look at photos
            </Link>
          </p>
        </div>
      </section>
    </section>

    <section id="sample-audio" className="wrapper style7 special">
      <div className="inner">
        <header className="major">
          <h2>Latest single</h2>
        </header>
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/383435171&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>
    </section>
    <Footer />
  </div>
);
{
  /*
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
        */
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout isLandingPage>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
