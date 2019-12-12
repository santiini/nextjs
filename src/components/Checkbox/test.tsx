/* eslint-env jest */
import React from "react";
import { shallow } from "enzyme";
import Checkbox from ".";

describe("Checkbox", () => {
  it("renders the checkbox with correct label", () => {
    const wrapper = shallow(
      <Checkbox
        rootID="CarCheckbox"
        id="CarAvailablity"
        name="is_available"
        value="yes"
        label="Is this car available"
      />
    );

    expect(
      wrapper
        .find("#CarCheckbox")
        .find("label")
        .text()
    ).toEqual("Is this car available");
  });
});
