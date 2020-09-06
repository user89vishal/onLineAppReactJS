import React from "react";

import Timer from "../components/timer";

const NavBar = ({ handleLogout, skillLevel }) => {
  console.log("In navBar skillLevel", skillLevel);
  let timeAllocation = 0;

  console.log("timeAllocation: ", timeAllocation);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <li className="navbar-brand">Online Test Application</li>
      {skillLevel && (
        <li className="navbar-brand">{`Skill Level: ${skillLevel}`}</li>
      )}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav"></div>
      <div
        className="collapse navbar-collapse flex-grow-0"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav text-right">
          {skillLevel && <Timer timeLimit={timeAllocation} />}
          <li
            className="nav-item active"
            style={{ cursor: "pointer" }}
            onClick={handleLogout}
          >
            <a className="nav-link" to="/">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
