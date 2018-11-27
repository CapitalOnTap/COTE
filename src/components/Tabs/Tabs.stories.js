import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Caption } from '../atoms/Typography';
import TextInput from '../TextInput/TextInput';
import WidgetBox from '../WidgetBox/WidgetBox';
import Tab from './Tab';
import Tabs from './Tabs';
import Button from '../atoms/Button/Button'

const ButtonWrapper = styled.div`
  padding: 1rem;
  border-top: 1px solid lightgrey;
`;

const TabPanel = styled.div`
  padding: 1rem;
`;

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

storiesOf('Tab', module).add('Normal', () => (
  <Tab title="Tab One" isActive>
    <div>Tab One Content</div>
  </Tab>
));

class MyComponent extends Component {
  state = {
    selectedTab: 1
  };

  handleTabClicked = index => {
    this.setState({ selectedTab: index });
  };

  render() {
    return (
      <Fragment>
        <WidgetBox>
          <Tabs onTabClicked={this.handleTabClicked} controlledActiveIndex={this.state.selectedTab}>
            <Tab title="Redeem cash">
              <InputWrapper>
                <TextInput
                  full
                  error="*The amount of money can’t surpass your redeemable points."
                />
              </InputWrapper>
              <InputWrapper>
                <Caption text="Conversion rate: 0.5%" />
              </InputWrapper>
              <InputWrapper>
                <Caption text="Redeem fee: Free" />
              </InputWrapper>
              <InputWrapper>
                <TextInput
                  error="*The amount of money can’t surpass your redeemable points."
                  full
                />
              </InputWrapper>
            </Tab>
            <Tab title="Redeem balance">
              <h1>Panel 2 content</h1>
            </Tab>
            <Tab title="Third tab">this my third tab</Tab>
          </Tabs>
        </WidgetBox>
        <Button onClick={() => this.setState({ selectedTab: 0 })}>Switch to first tab</Button>
      </Fragment>
    );
  }
}

storiesOf('Tabs', module).add('Tabs', () => <MyComponent />);
