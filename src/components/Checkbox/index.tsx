import React from "react";
import { NextPage } from "next";

interface CheckboxProps {
  rootID: string;
  id: string;
  name: string;
  value: string;
  label: string;
}
const Checkbox: NextPage<CheckboxProps> = props => {
  return (
    <div className="test-checkbox" id={props.rootID}>
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        value={props.value}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default Checkbox;
