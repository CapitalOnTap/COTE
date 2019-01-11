import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../atoms/Icon/Icon';
import { Title } from '../atoms/Typography/index';
import DetailsCard, { CardDetails } from '../DropdownCard/DetailsCard';
import DropdownCard from '../DropdownCard/DropdownCard';
import { colors as defaultColors } from '../../styles/defaults';

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14);
  height: 350px;
  overflow: hidden;
`;

const AddIcon = styled(Icon)<React.HTMLAttributes<{}>>`
  color: ${props =>
    props.theme.colorPrimary ? props.theme.colorPrimary : defaultColors.black};
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid #eeeeee;
`;

const DetailCardWrapper = styled.div`
  height: 302px;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const ScrollBar = styled.div`
  overflow-y: scroll;
  height: 300px;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3.5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #a4aab3;
  }
`;

interface AccordionDetails {
  title: string;
  cardDetails: CardDetails[];
}

interface Props {
  details: AccordionDetails[];
  title: string;
  withIcon?: boolean;
}

class Accordion extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false
    };
  }

  handleClick() {
    this.setState({ isAdding: true });
  }

  render() {
    const { details, title, withIcon } = this.props;
    return (
      <Wrapper>
        <TopWrapper>
          <Title bold>{title}</Title>
          {withIcon ? <AddIcon name="add" onClick={this.handleClick} /> : null}
        </TopWrapper>
        <DetailCardWrapper>
          <ScrollBar>
            {details.map((detail, i) => (
              // TODO - remove index as key
              <DropdownCard key={i} title={detail.title} underline={true}>
                <DetailsCard
                  cardDetails={detail.cardDetails}
                  underline={true}
                />
              </DropdownCard>
            ))}
          </ScrollBar>
        </DetailCardWrapper>
      </Wrapper>
    );
  }
}

(Accordion as any).propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      cardDetails: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          details: PropTypes.string
        })
      )
    })
  ),
  title: PropTypes.string
};

(Accordion as any).defaultProps = {
  title: '',
  details: [
    {
      title: '',
      cardDetails: [{ title: '', details: '' }]
    }
  ]
};

export default Accordion;
