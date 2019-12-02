import * as React from 'react';
import Dropzone, { DropzoneProps } from 'react-dropzone';
import styled from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';
import Button from '../atoms/Button/Button';
import Icon from '../atoms/Icon/Icon';
import { Title } from '../atoms/Typography/index';

const StyledDropZone = styled(Dropzone)<DropzoneProps & { children: React.ReactNode }>`
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

interface Props extends DropzoneProps {
  icon?: string;
  // TODO: type the theme
  theme?: any;
  buttonText?: string;
  title?: string;
  subtitle?: string;
  multiple?: boolean;
  onDrop?: () => void;
}

class Uploader extends React.Component<Props> {
  dropzone: Dropzone | null;

  onOpenClick = () => {
    this.dropzone && (this.dropzone as any).open();
  };

  render() {
    const { icon, theme, buttonText, title, subtitle, ...props } = this.props;

    return (
      <StyledDropZone
        {...props}
        activeStyle={{
          border: `dashed 2px ${theme ? theme.colorPrimary : defaultColors.success}`
        }}
        rejectStyle={{
          border: `dashed 2px ${theme ? theme.colorDanger : defaultColors.danger}`
        }}
        ref={node => {
          this.dropzone = node;
        }}
      >
        <ContentWrapper>
          <Icon name={icon} />
          <Title bold>{title}</Title>
          <p>{subtitle}</p>
          <p>or</p>
        </ContentWrapper>
        <Button primary solid type="button" onClick={this.onOpenClick}>
          {buttonText}
        </Button>
      </StyledDropZone>
    );
  }
}

(Uploader as any).defaultProps = {
  icon: 'add_circle_outline',
  buttonText: 'Choose files',
  title: 'Drag and drop files here',
  subtitle: ''
};

export default Uploader;
