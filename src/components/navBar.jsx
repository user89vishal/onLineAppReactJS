import React from "react";

import Timer from "../components/timer";

const NavBar = ({ handleLogout, skillLevel }) => {
  let timeAllocation = 0;

  console.log("timeAllocation: ", timeAllocation);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <li className="navbar-brand">Online Test Application</li>
      {skillLevel && (
        <li className="navbar-brand">{`Skill Level: ${skillLevel}`}</li>
      )}
      <div className="collapse navbar-collapse" id="navbarNav" />
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
