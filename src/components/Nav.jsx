import { Link } from "react-router";
import "./Nav.css";
function Nav() {
  return (
    <nav>
      <Link to="/about">About me</Link>
      <Link to="/contact">Get in touch</Link>
      <Link to="/projects">My projects</Link>
    </nav>
  );
}
export default Nav;
