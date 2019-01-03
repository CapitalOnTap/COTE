import {
  Button,
  Dropdown,
  Heading2,
  Navigation,
  StyledInput,
  Tab,
  Tabs,
  TextInput,
  Title,
  GlobalStyle
} from 'cote';
import React from 'react';

let fruit = 'apple';
const App = () => {
  const handleClick = () => (fruit = 'banana');

  return (
    <div>
      <GlobalStyle />
      <Navigation />
      <Heading2>This is a heading 2</Heading2>
      <Title>This is a title</Title>
      <Button type="submit">Hello world</Button>
      <Dropdown
        options={[
          { title: 'Option 1', value: 1 },
          { title: 'Option 2', value: 2 },
          { title: 'Option 3', value: 3 }
        ]}
      />
      <StyledInput
        onClick={e => (e.target.value = 'banana')}
        onChange={e => (fruit = 'banana')}
        value={fruit}
      />
      <TextInput onChange={e => (fruit = 'banana')} value={() => fruit} />

      <TextInput
        placeholder="Type something"
        labelText="Hellooooooo"
        full
        tooltip={{
          title: 'Why we need to know your Personal Income?',
          description:
            'Your Personal Income can help us to blabla information information information information information information information information'
        }}
      />

      <Tabs>
        <Tab title="Tab One" active="true">
          <div>Tab One Content</div>
        </Tab>
        <Tab title="Tab Two">
          <div>Tab Two Content</div>
        </Tab>
        <Tab title="Tab Three">
          <div>Tab Two Content</div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
