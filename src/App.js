import React, { Component } from "react";
import "./App.css";
import { FiUsers } from "react-icons/fi";
import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import Btn from "./CustomBtn";
import Input from "./CustomInput";

class App extends Component {
  state = {
    otp_show: true,
    email_show: false,
  };

  switchHandler1 = () => {
    this.setState({
      otp_show: true,
      email_show: false,
    });
  };

  switchHandler2 = () => {
    this.setState({
      otp_show: false,
      email_show: true,
    });
  };

  render() {
    return (
      // main form container
      <div className="container form-container">
        {/* login card */}
        <div className="login-card shadow p-3 mb-5 bg-white rounded">
          {/* login card header */}
          <div class="container login-card-header">
            <h4 className="text-muted text-center">LOG IN </h4>
            <div class="row">
              <div class="col-lg-6">
                <Btn
                  text="With OTP"
                  click={this.switchHandler1}
                  styles={`oe_btn ${this.state.otp_show && "orange"}`}
                />
              </div>
              <div class="col-lg-6">
                <Btn
                  text="With Email"
                  click={this.switchHandler2}
                  styles={`oe_btn ${this.state.email_show && "orange"}`}
                />
              </div>
            </div>
          </div>
          {/* form login icon */}
          <div className="login-icon">
            <FiUsers />
          </div>
          {/* login card body  input fields */}
          {this.state.otp_show ? (
            <Input
              type="number"
              placeholder="Enter Phone Number"
              IconComponent={AiOutlineMobile}
            />
          ) : (
            <div>
              <Input
                type="email"
                placeholder="Enter Email id"
                IconComponent={AiOutlineMail}
              />
              <Input
                type="password"
                placeholder="Enter Password"
                IconComponent={RiLockPasswordLine}
              />
            </div>
          )}
          {/* login button */}
          <Btn type="success" isBlock={true} />
          {/* login card footer  */}
          <div class="login-card-footer mt-3">
            <a href="#" className="ml-0">
              FORGOT PASSWORD?
            </a>
            <a href="#" className="ml-2">
              <span className="text-muted">NOT A REGISTERED USER? </span>
              SIGN UP
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
