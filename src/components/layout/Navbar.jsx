import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-4xl " />
          <Link to="/" className="align-middle font-bold text-xl">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end gap-2">
            <Link
              to="/"
              className="btn btn-ghost btn-sm rounded-btn align-middle"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="btn btn-ghost btn-sm rounded-btn align-middle"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defualtProp = {
  title: "Github",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
