import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleNavbar = () => {
    if (toggle) setToggle(false);
    else setToggle(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Quota Watcher
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Alterna navegação"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/stocks">
              Ações
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/crypto">
              Criptomoedas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logout">
              Sair
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
