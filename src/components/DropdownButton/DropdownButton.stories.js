import { storiesOf } from "@storybook/react";
import React from "react";
import Icon from "../atoms/Icon/Icon";
import DropdownButton from "./DropdownButton";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 40px;
  padding: 10px;
  &:hover {
    background-color: ${props =>
      props.theme ? props.theme.colorHighlight : "rgba(39, 177, 97, 0.6)"};
  }
`;

const items = [
  <StyledDiv onClick={() => alert("Freeze")}>Freeze</StyledDiv>,
  <StyledDiv onClick={() => alert("Closed")}>Closed</StyledDiv>,
  <StyledDiv onClick={() => alert("Broken")}>Broken</StyledDiv>
];

const elementOptions = [
  { title: <span>Option 1</span>, value: 1 },
  { title: <Icon name="more_horiz" />, value: 2 },
  {
    title: (
      <div style={{ marginTop: "20px" }}>
        <i>Option 3</i>
      </div>
    ),
    value: 3
  }
];

storiesOf("DropdownButton/Normal", module)
  .add("Primary", () => (
    <DropdownButton primary text="Actions">
      {items}
    </DropdownButton>
  ))
  .add("Danger", () => (
    <DropdownButton danger text="Actions">
      {items}
    </DropdownButton>
  ))
  .add("Secondary", () => (
    <DropdownButton secondary text="Actions">
      {items}
    </DropdownButton>
  ))
  .add("loading", () => (
    <DropdownButton primary loading text="Actions">
      {items}
    </DropdownButton>
  ))
  .add("Disabled", () => (
    <DropdownButton primary disable text="Actions">
      {items}
    </DropdownButton>
  ))
  .add("Small", () => (
    <DropdownButton small primary text="Actions">
      {items}
    </DropdownButton>
  ))
  .add("Small loading", () => (
    <DropdownButton small primary loading text="Actions">
      {items}
    </DropdownButton>
  ));

storiesOf("DropdownButton/Outlined", module)
  .add("Primary", () => (
    <DropdownButton primary outline text="Actions">
      {items}
    </DropdownButton>
  ))
  .add("Danger", () => (
    <DropdownButton danger outline text="Actions">
      {items}
    </DropdownButton>
  ))
  .add("Secondary", () => (
    <DropdownButton secondary outline text="Actions">
      {items}
    </DropdownButton>
  ))
  .add("loading", () => (
    <DropdownButton primary loading outline text="Actions">
      {items}
    </DropdownButton>
  ))
  .add("Disabled", () => (
    <DropdownButton primary disabled outline text="Actions">
      {items}
    </DropdownButton>
  ))
  .add("Small", () => (
    <DropdownButton primary small outline text="Actions">
      {items}
    </DropdownButton>
  ))
  .add("Small loading", () => (
    <DropdownButton primary small loading outline text="Actions">
      {items}
    </DropdownButton>
  ));

storiesOf("DropdownButton/Solid", module)
  .add("Primary", () => (
    <DropdownButton primary solid text="Actions">
      {items}
    </DropdownButton>
  ))
  .add("Danger", () => (
    <DropdownButton danger solid text="Actions">
      {items}
    </DropdownButton>
  ))
  .add("Secondary", () => (
    <DropdownButton secondary solid text="Actions">
      {items}
    </DropdownButton>
  ))
  .add("loading", () => (
    <DropdownButton primary loading solid text="Actions">
      {items}
    </DropdownButton>
  ))
  .add("Disabled", () => (
    <DropdownButton danger disabled solid text="Actions">
      {items}
    </DropdownButton>
  ))
  .add("Small", () => (
    <DropdownButton primary small solid text="Actions">
      {items}
    </DropdownButton>
  ))
  .add("Small loading", () => (
    <DropdownButton primary small loading solid text="Actions">
      {items}
    </DropdownButton>
  ));
