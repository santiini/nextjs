import React, { ChangeEvent, MouseEvent } from "react";
import Router from "next/router";

import * as T from "./types";

export interface LoginProps {}
export interface LoginState {
  credentials: T.LoginCredentials;
  isLoginLoading: boolean;
}
class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      isLoginLoading: false,
      credentials: {
        email: "",
        password: ""
      }
    };
  }

  onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState(prev => ({
      credentials: {
        ...prev.credentials,
        [name]: value
      }
    }));
  };

  handleLogin = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    this.setState({ isLoginLoading: true });
    setTimeout(() => {
      this.setState({ isLoginLoading: false });
      Router.replace("/cars");
    }, 500);
  };

  render() {
    const { credentials } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input
            id="formEmail"
            name="email"
            type="text"
            value={credentials.email}
            onChange={this.onInputChange}
          />
          <input
            name="password"
            type="password"
            value={credentials.password}
            onChange={this.onInputChange}
          />

          <button id="loginSubmit" onClick={this.handleLogin}>
            {this.state.isLoginLoading ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
