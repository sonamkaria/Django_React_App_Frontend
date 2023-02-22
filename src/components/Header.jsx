import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>Blog</div>
      </Link>
    </nav>
  );
}

export default Header;