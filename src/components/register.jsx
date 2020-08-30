import React from "react";

const register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="container mt-3">
      <h1>Register</h1>
      <form onSubmit={() => console.log("Submitted")}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" className="form-control" />
        </div>
      </form>
      <button className="btn btn-primary">Register</button>
    </div>
  );
};

export default register;
