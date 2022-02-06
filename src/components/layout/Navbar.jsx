import React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="text-3xl inline pr-2" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 mx-2 px-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost rounded-btn btn-sm">
              Home
            </Link>

            <Link to="/about" className="btn btn-ghost rounded-btn btn-sm">
              About
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Github Finder",
};

export default Navbar;
