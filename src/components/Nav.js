import React from "react";
import { Link } from "gatsby";

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tour">Tour Dates</Link>
              </li>
              <li>
                <Link to="/photos">Photos</Link>
              </li>
              <li>
                <Link to="/videos">Videos</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/booking">Booking</Link>
              </li>

              <li>
                <Link to="/epk">Electronic Press Kit</Link>
              </li>

              <li>
                <Link to="/generic">Generic</Link>
              </li>
              <li>
                <Link to="/elements">Elements</Link>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {""}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
