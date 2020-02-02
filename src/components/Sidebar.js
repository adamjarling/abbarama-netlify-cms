import React, { useState } from "react";
import Nav from "./Nav";
import { Link } from "gatsby";
import logo from "../images/logo-long-cutout.png";

export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
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
