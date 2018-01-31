import React from "react";
import { storiesOf } from "@storybook/react";
import TextInput from "./TextInput";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

const poundMask = createNumberMask({
  prefix: "£ ",
  thousandsSeparatorSymbol: ",",
  integerLimit: 10,
  allowDecimal: true,
  decimalSymbol: ".",
  decimalLimit: 2
});

storiesOf("Text Input", module)
  .add("Normal", () => <TextInput placeholder="Placeholder value" />)
  .add("Required", () => <TextInput required error="There was an error" />)
  .add("Required - no error message", () => <TextInput required />)
  .add("With Label", () => (
    <TextInput placeholder="Placeholder value" labelText="Label" />
  ))
  .add("With info", () => <TextInput info="This is an info to help user." />)
  .add("With info and error", () => (
    <TextInput
      info="This is an info to help user."
      error="Field is required"
      required
    />
  ))
  .add("With mask - Number", () => (
    <TextInput
      placeholder="e.g. 07858585858855"
      mask={[
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        " ",
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        " ",
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/
      ]}
    />
  ))
  .add("With currency mask", () => (
    <TextInput placeholder="" guide={true} mask={poundMask} />
  ))
  .add("With mask and guide - Number", () => (
    <TextInput
      placeholder="e.g. 07858585858855"
      guide={true}
      mask={[
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        " ",
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        " ",
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/
      ]}
    />
  ))
  .add("With mask - Text", () => (
    <TextInput
      placeholder="e.g. Text up to 8 characters"
      mask={[/^[a-zA-Z ]+$/]}
    />
  ))
  .add("Full-width", () => (
    <TextInput placeholder="e.g. Text up to 8 characters" full />
  ));
