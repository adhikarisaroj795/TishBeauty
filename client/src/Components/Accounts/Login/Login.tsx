import React from "react";
import "./Logins.scss";
const Login = ({ isLoginToggled }) => {
  return (
    <div className="login-holder">
      <div
        className={`login-wrapper ${
          isLoginToggled ? "loginform__active" : ""
        }  container`}
      >
        <h3>Login</h3>
        <span>Please enter your email and password</span>
        <form className="">
          <div className="form__link">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form__link">
            <input type="password" placeholder="Password" />
          </div>
          <button className="btn">Login</button>
          <span>
            Forget your password?<span> Recover Password?</span>
          </span>
          <span>
            New to Tish Beauty? <span>create and account?</span>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
