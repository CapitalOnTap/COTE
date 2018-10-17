import React from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';
import Button from '../atoms/Button/Button';
import Icon from '../atoms/Icon/Icon';
import { Title } from '../atoms/Typography';

const StyledDropZone = styled(Dropzone)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 224px;
  border: dashed 2px ${defaultColors.darkGrey};
  border-radius: 4px;
  padding: 1.5em;
  width: 232px;
  @media screen and (max-width: 640px) {
    border: none;
    height: auto;
    width: fit-content;
  }
`;

const ContentWrapper = styled.div`
  text-align: center;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const Uploader = ({ icon, theme, buttonText, title,subtitle, ...props }) => {
  return (
    <StyledDropZone
      {...props}
      activeStyle={{
        border: `dashed 2px ${
          theme ? theme.colorPrimary : defaultColors.success
        }`
      }}
      rejectStyle={{
        border: `dashed 2px ${theme ? theme.colorDanger : defaultColors.danger}`
      }}
    >
      <ContentWrapper>
        <Icon name={icon} primary />
        <Title bold>{title}</Title>
        <Title>{subtitle}</Title>
        <p>or</p>
      </ContentWrapper>
      <Button primary solid type="button">
        {buttonText}
      </Button>
    </StyledDropZone>
  );
};

Uploader.propTypes = {};

Uploader.defaultProps = {
  icon: 'add_circle_outline',
  buttonText: 'Choose files',
  title: 'Drag and drop files here',
  subtitle:'(PDFs)',
};

export default Uploader;
