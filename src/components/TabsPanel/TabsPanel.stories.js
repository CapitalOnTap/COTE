import React from "react";
import { storiesOf } from "@storybook/react";
import { Tab, Tabs } from "./TabsPanel";

storiesOf("TabsPanel", module).add("Tabs", () => (
  <Tabs className="">
    <Tab title="Tab One" active="true">
      <div>Tab One Content</div>
    </Tab>
    <Tab title="Tab Two">
      <div>Tab Two Content</div>
    </Tab>
  </Tabs>
));
