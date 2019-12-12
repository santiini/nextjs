/* eslint-env jest */
import React from "react";
import { shallow } from "enzyme";

import Login from "../Login";

describe("Login", () => {
  it("renders the h1 title", () => {
    const login = shallow(<Login />);
    expect(login.find("h2").text()).toEqual("Login");
  });

  it("renders the form", () => {
    const login = shallow(<Login />);
    expect(login.find("form")).toHaveLength(1);
  });

  it("changes the text of email", () => {
    const login = shallow(<Login />);
    login.find("#formEmail").simulate("change", {
      target: {
        name: "email",
        value: "sunxiaotao@126.com"
      }
    });
    expect(
      login
        .update()
        .find("#formEmail")
        .props().value
    ).toEqual("sunxiaotao@126.com");
  });

  it("changes the text of login button after clicking it", () => {
    const login = shallow(<Login />);
    login.find("#loginSubmit").simulate("click", { preventDefault() {} });
    expect(
      login
        .update()
        .find("#loginSubmit")
        .text()
    ).toEqual("Logging in...");
  });
});
