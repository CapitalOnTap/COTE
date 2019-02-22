import React from "react";
import { storiesOf } from "@storybook/react";
import HighlightsBar from "./HighlightsBar";

const items = [
  { icon: "check_circle", name: "USP 1" },
  { icon: "check_circle", name: "USP 2" },
  { icon: "check_circle", name: "USP 3" },
  { icon: "check_circle", name: "USP 4" }
];
const itemsNoIcons = [
  { name: "USP 1" },
  { name: "USP 2" },
  { name: "USP 3" },
  { name: "USP 4" }
];

storiesOf("HighlightsBar", module)
  .add("With Icons", () => <HighlightsBar items={items} />)
  .add("Without Icons", () => <HighlightsBar items={itemsNoIcons} />);
