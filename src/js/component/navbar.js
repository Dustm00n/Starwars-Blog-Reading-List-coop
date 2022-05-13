import React from "react";
import { Link } from "react-router-dom";
import starwarslogo from "../../img/Starwars_logo.png";
import darthvader from "../../img/Darth_Vader.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light justify-content-end">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={starwarslogo} alt="" width="60" height="60" />
          <img src={darthvader} alt="" width="60" height="60" />
        </a>
        <div>
          <a
            className="nav-link dropdown-toggle bg-primary text-white"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Favorites
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
