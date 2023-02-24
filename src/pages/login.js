import {Button} from "../components";
import {Input} from "../components";
import { Images } from "../config";

export const Login = () => {
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
            <div>
              <input type={"checkbox"} id="remember" className="checkbox" />
              <label htmlFor="rember">Remember me</label>
            </div>
            <a href={"/"}>Forgot password</a>
          </div>
          <Button className={"btn-filled"} text={"Login"} />
          <hr />
          <a href="/">Don't have an account?</a>
          <br />
          <Button className={"btn-empty"} text={"Register"} />
        </form>
      </div>
    </div>
  );
};
