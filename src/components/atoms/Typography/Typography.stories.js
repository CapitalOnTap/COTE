import { storiesOf } from "@storybook/react";
import * as React from "react";
import Caption from "./Caption";
import { Heading1, Heading2, Subtitle, Title } from "./Heading";
import Label from "./Label";

// storiesOf("Typography", module).add();

storiesOf("Typography/Headings", module)
  .add("Heading1", () => <Heading1>Heading 1</Heading1>)
  .add("Heading1 with a lot of text", () => (
    <Heading1>
      Etiam porta tempus orci quis tristique. Fusce blandit quis risus in
      suscipit. Etiam porta tempus orci quis tristique. Fusce blandit quis risus
      in suscipit
    </Heading1>
  ))
  .add("Heading1 highlighted", () => (
    <Heading1 highlight>This text is important!</Heading1>
  ))
  .add("Heading 2", () => <Heading2>Heading 2</Heading2>)
  .add("Title", () => <Title>Title</Title>)
  .add("Subtitle", () => <Subtitle>Subtitle</Subtitle>);

storiesOf("Typography/Label", module)
  //  @ts-ignore
  .add("Normal", () => <Label />)
  //  @ts-ignore
  .add("Required", () => <Label required />);

storiesOf("Typography/Caption", module)
  //  @ts-ignore
  .add("Normal", () => <Caption text="Caption" />)
  .add("Error", () => <Caption text="Caption" required />);
