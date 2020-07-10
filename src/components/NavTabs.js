import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <React.Fragment>
        <nav class="top-nav column column--mobile">
          <ul class="nav-container">
            <li>
              <Link to="/" className="link">
                About
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/projects" className="link">
                Projects
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
            <li>|</li>
            <li>
              <a href="https://github.com/haden-liu" className="link">
                GitHub
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="https://www.linkedin.com/in/haden-hang-liu/" className="link">
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
    </React.Fragment>
  );
}

export default NavTabs;
