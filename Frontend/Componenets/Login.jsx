import React, { useState, useEffect } from "react";
import "../Css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setauth }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleOnLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/api/user/login", {
      email,
      password,
    });

    try {
      if (res.data.success) {
        setMessage("sucessful");
        setauth(true);
        localStorage.setItem("TOKEN", JSON.stringify(res.data.jwtToken));
        localStorage.setItem("USER", JSON.stringify(res.data.rest));
        navigate("/");
      } else {
        setMessage("Invalid Credentials");
      }
    } catch (error) {
      setMessage(res.data.msg);
    }
  };
  return (
    <div className="loginmain">
      <div className="Logcontainer">
        <h1>Login</h1>
        <form className="loginform">
          <input
            type="email"
            placeholder="Email"
            value={email}
            required={true}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required={true}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button onClick={handleOnLogin}>Login</button>
        </form>
        <p>
          Don't have an Account ?{" "}
          <strong>
            <Link to="/sign">Register</Link>
          </strong>
        </p>
      </div>
      <div className="error">
        <p>{Message}</p>
      </div>
    </div>
  );
};

export default Login;
