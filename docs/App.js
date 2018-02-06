import React from "react";
import {
  Button,
  Navigation,
  initGlobalStyles,
  Heading2,
  Title,
  Dropdown
} from "cote";

initGlobalStyles();

const App = () => (
  <div>
    <Navigation />
    <Heading2>This is a heading 2</Heading2>
    <Title>This is a title</Title>
    <Button type="submit">Hello world</Button>
    <Dropdown
      options={[
        { title: "Option 1", value: 1 },
        { title: "Option 2", value: 2 },
        { title: "Option 3", value: 3 }
      ]}
    />
  </div>
);

export default App;
