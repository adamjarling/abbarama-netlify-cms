import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import "../sass/main.scss";
import SideBar from "../components/Sidebar";
import { isMobile } from "react-device-detect";

const TemplateWrapper = ({ children, fullMenu, isLandingPage }) => {
  const { title, description } = useSiteMetadata();
  const [mobile, setMobile] = useState();
  const [menuVisible, setMenuVisible] = useState();
  const [isPreloaded, setIsPreloaded] = useState(true);

  useEffect(() => {
    setMobile(isMobile);
    setIsPreloaded(false);
  }, []);

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <div
        className={`${mobile ? "is-mobile" : ""} ${
          isLandingPage ? "landing" : ""
        } ${menuVisible ? "is-menu-visible" : ""} main-body
            ${isPreloaded ? "is-preload" : ""}
          `}
      >
        <div>
          <SideBar fullMenu={fullMenu} setMenuVisible={setMenuVisible} />
          {children}
          {/* <Footer /> */}
        </div>
      </div>
      {/* <Navbar />
      <div>{children}</div>
      <Footer /> */}
    </div>
  );
};

export default TemplateWrapper;
