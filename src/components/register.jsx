import React, { useState } from "react";
import Input from "../common/input";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (email.trim() === "") errors.email = "Email Address is required";
    if (password.trim() === "")
      errors.password = "Password Address is required";
    if (username.trim() === "")
      errors.username = "Username Address is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    console.log(errors);
    setErrors(errors);

    // const result = Joi.validate(email, schema);

    // console.log(errors);
  };

  const handleChange = (e) => {
    if (e.currentTarget.name === "email")
      return setEmail(e.currentTarget.value);
    if (e.currentTarget.name === "password")
      return setPassword(e.currentTarget.value);
    if (e.currentTarget.name === "username")
      return setUserName(e.currentTarget.value);
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          label="Email Address"
          value={email}
          handleChange={handleChange}
          type="text"
        />

        <Input
          name="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          type="password"
        />

        <Input
          name="username"
          label="Username"
          value={username}
          handleChange={handleChange}
          type="text"
        />

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Register;
