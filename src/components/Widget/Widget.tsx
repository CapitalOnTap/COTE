import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../atoms/Icon/Icon';
import { Heading3 } from '../atoms/Typography/index';

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14);
`;

const WidgetTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  text-align: center;
`;

const StyledIcon = styled(Icon)`
  margin-bottom: 0.2em;
`;

const BottomIcon = styled(Icon)`
  margin-right: '0.57em';
`;

const WidgetBottomWrapper = styled.div`
  border-top: 1px solid #eeeeee;
  padding: 1em;

  & > div {
    margin-bottom: 1em;
  }

  & > div:last-child {
    margin-bottom: 0;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ItemTitle = styled.span`
  font-weight: bold;
`;

interface Props {
  items: { title: string; icon: string }[];
  title: string;
  icon: string;
  description: string;
}

const Widget: React.SFC<Props> = ({
  items,
  title,
  icon,
  description,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <WidgetTopWrapper>
        <StyledIcon name={icon} primary />
        <Heading3>{title}</Heading3>
        {description && <p style={{ marginTop: '16px' }}>{description}</p>}
      </WidgetTopWrapper>
      {items.length ? (
        <WidgetBottomWrapper>
          {items.map((item, i) => {
            return (
              // TODO: fix index as key
              <ItemWrapper key={`w-${i}`}>
                <BottomIcon primary name={item.icon} />
                <ItemTitle>{item.title}</ItemTitle>
              </ItemWrapper>
            );
          })}
        </WidgetBottomWrapper>
      ) : null}
    </Wrapper>
  );
};

(Widget as any).propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  description: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string
};

Widget.defaultProps = {
  title: 'Title',
  description: '',
  icon: 'card_giftcard',
  items: []
};

export default Widget;
