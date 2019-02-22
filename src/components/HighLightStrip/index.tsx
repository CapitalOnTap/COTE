import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { hexToRgbA } from '../../utils/index';

const background = (props: { danger?: boolean } & any) => {
  if (props.danger) {
    return hexToRgbA(props.theme.colorDanger, 0.1);
  }

  return props.theme.colorHighlight;
};

const Wrapper = styled.div<{ danger?: boolean }>`
  padding: 16px;
  background: ${background};
`;

interface Props {
  danger?: boolean;
}

const HighlightStrip: React.SFC<Props> = ({ children, danger }) => {
  return <Wrapper danger={danger}>{children}</Wrapper>;
};

(HighlightStrip as any).propTypes = {
  children: PropTypes.node.isRequired,
  /** Sets color to whatever has been defined as danger/error color in the theme */
  danger: PropTypes.bool
};

HighlightStrip.defaultProps = {
  danger: false
};

export default HighlightStrip;
