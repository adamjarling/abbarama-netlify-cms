import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { Link } from "gatsby";
import logo from "../images/logo-teal-long.png";

export default function SideBar({ fullMenu, setMenuVisible }) {
  const [headerOpen, toggleHeader] = useState(false);

  useEffect(() => {
    if (headerOpen) {
      setMenuVisible(true);
    } else {
      setMenuVisible(false);
    }
  }, [headerOpen]);

  return (
    <header id="header" className={`${fullMenu ? "" : "alt"}`}>
      <h1>
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
      </h1>
      <div className={`${headerOpen ? "is-menu-visible" : " "}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </header>
  );
}
