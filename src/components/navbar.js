import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/animal-api">Animal</Link>
        </li>
        <li>
          <Link to="/snacks">Snacks</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
