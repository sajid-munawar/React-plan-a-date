import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components";
import { Input } from "../components";
import { Images, Navigations } from "../config";

export const Login = () => {
  const [isCheck, setIsCheck] = useState(false);
  const handleCheck = () => {
    setIsCheck(!isCheck);
  };

  return (
    <div className="general-wrapper bg-blue">
      <div className="logo-holder">
        <img src={Images.LOGO} alt="logo" className="img-fluid" />
      </div>
      <div className="content-container bottom-fixed">
        <form className="form-container">
          <h1 className="login-heading">Login To Your Account</h1>
          <h6 className="login-sub-heading">Please enter your login details</h6>
          <Input
            type={"email"}
            placeholder={"write your email"}
            name={"email"}
          />
          <Input
            type={"password"}
            placeholder={"enter your password"}
            name={"password"}
          />
          <div className="remember">
            <div className="checkbox-container">
              <img
                id="remember"
                src={Images.CHECKED}
                alt="checkbox"
                className={isCheck ? "" : "unchecked"}
                onClick={handleCheck}
              />
              <img
                src={Images.UNCHECKED}
                alt="checkbox"
                className={isCheck ? "unchecked" : ""}
                onClick={handleCheck}
              />
              <div className="remember-me" onClick={handleCheck}>
                Remember Me
              </div>
            </div>
            <a href={"/"}>Forgot password</a>
          </div>

          <Link to={Navigations.LOGIN}>
            <Button className="btn-filled proceed-login">Login</Button>
          </Link>
          <hr />
          <a href="/">Don't have an account?</a>
          <br />
          <Link to={Navigations.REGISTER}>
            <Button className="btn-empty proceed-login">Register</Button>
          </Link>
        </form>
      </div>
    </div>
  );
};
