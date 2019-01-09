import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

interface WrapperProps {
  underline?: boolean;
  bgColor?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  border-bottom: ${props => (props.underline ? `1px solid #eeeeee` : '0')};
  padding: 16px 0px 0px;
  background-color: ${props =>
    props.bgColor ? props.theme.colorPrimary : '#ffffff'};
`;

const Box = styled.div`
  display: flex;
  padding: 8px 24px;
  font-size: 14px;
`;

const DetailWrapper = styled(Box)`
  font-weight: 700;
`;

const StyledLink = styled.a`
  color: ${props => props.theme.colorPrimary};
  font-weight: 500;
  padding-right: 16px;
  text-decoration: underline;
`;

export interface CardDetails {
  title?: string;
  details?: string;
}

export interface CardLink {
  callBack?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  title?: string;
}

interface Props extends WrapperProps {
  cardDetails: CardDetails[];
  links?: CardLink[];
}

const DetailsCard: React.SFC<Props> = ({
  links,
  cardDetails,
  bgColor,
  underline
}) => {
  return (
    <Wrapper bgColor={bgColor} underline={underline}>
      {cardDetails.map((field, i) => {
        return (
          <div key={i}>
            <Box>{field.title}</Box>
            <DetailWrapper>{field.details}</DetailWrapper>
          </div>
        );
      })}
      <Box>
        {links
          ? links.map((link, i) => (
              // TODO: Fix index as key
              <StyledLink key={i} onClick={link.callBack}>
                {link.title}
              </StyledLink>
            ))
          : null}
      </Box>
    </Wrapper>
  );
};

(DetailsCard as any).propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      callBack: PropTypes.func
    })
  ),
  cardDetails: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      details: PropTypes.string
    })
  ),
  bgColor: PropTypes.bool,
  underline: PropTypes.bool
};

DetailsCard.defaultProps = {
  cardDetails: [{ title: '', details: '' }],
  links: [{ title: '', callBack: i => console.log(i) }],
  bgColor: false,
  underline: false
};

export default DetailsCard;
