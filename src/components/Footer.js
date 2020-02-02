import React from "react";
import config from "../../config";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const Footer = data => {
  //console.log("data", data);
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      {/* {data.file.childImageSharp && (
        <Img fluid={data.file.childImageSharp.fluid} />
      )} */}
      <ul className="copyright">
        <li>&copy; ABBARAMA 2020</li>
        <li>
          Design: Adam J. Arling and <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </footer>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query HagstromQuery {
        file(
          sourceInstanceName: { eq: "myimages" }
          relativePath: { eq: "Hagstrom_Logo_ww.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
