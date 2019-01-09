import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../atoms/Icon/Icon';
import { Heading3 } from '../atoms/Typography/Heading';

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14);
  max-width: 360px;
  overflow: hidden;
`;

const ImageBox = styled.div`
  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
`;

const CaptionBox = styled.div<{ backgroundColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  background-color: ${props => props.backgroundColor};
`;

const StyledHeading3 = styled(Heading3)`
  color: #fff;
  margin-left: 8px;
`;

interface Props {
  imageSrc: string;
  captionBackgroundColor: string;
  icon: string;
  caption: string;
}

const CaptionedImageBox: React.SFC<Props> = ({
  imageSrc,
  captionBackgroundColor,
  icon,
  caption
}) => {
  return (
    <Wrapper>
      <ImageBox>
        <img src={imageSrc} />
      </ImageBox>
      <CaptionBox backgroundColor={captionBackgroundColor}>
        <Icon name={icon} circle reverse />
        <StyledHeading3>{caption}</StyledHeading3>
      </CaptionBox>
    </Wrapper>
  );
};

(CaptionedImageBox as any).propTypes = {
  imageSrc: PropTypes.string,
  captionBackgroundColor: PropTypes.string,
  icon: PropTypes.string,
  caption: PropTypes.string
};

CaptionedImageBox.defaultProps = {
  imageSrc: 'http://via.placeholder.com/320x176',
  captionBackgroundColor: '#27b161',
  icon: 'check_circle',
  caption: 'CORRECT'
};

export default CaptionedImageBox;
