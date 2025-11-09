import { Link, useMatch } from "react-router";
// import { useState } from "react";
import "./Nav.css";
function Nav() {
  const contactMatch = useMatch("/contact");
  const projectsMatch = useMatch("/projects");
  const aboutMatch = useMatch("/about");

  return (
    <nav>
      <Link to="/about" className={aboutMatch ? "activeNav" : "hover"}>
        About me
      </Link>
      <Link to="/contact" className={contactMatch ? "activeNav" : "hover"}>
        Get in touch
      </Link>
      <Link to="/projects" className={projectsMatch ? "activeNav" : "hover"}>
        My projects
      </Link>
    </nav>
  );
}
export default Nav;
