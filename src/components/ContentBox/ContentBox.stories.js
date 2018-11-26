import React from "react";
import { storiesOf } from "@storybook/react";
import ContentBox from "./ContentBox";
import Button from "../atoms/Button/Button";
import TextInput from "../TextInput/TextInput";
import Dropdown from "../Dropdown/Dropdown";

storiesOf("ContentBox", module)
  .add("Empty", () => <ContentBox />)
  .add("No Padding", () => <ContentBox noPadding='true'/>)
  .add("With a button inside", () => (
    <ContentBox title="Content box with a button">
      <Button>Click me</Button>
    </ContentBox>
  ))
  .add("With form elements inside", () => (
    <ContentBox title="Content box with a button">
      <TextInput full />
      <br />
      <Dropdown full />
    </ContentBox>
  ));
