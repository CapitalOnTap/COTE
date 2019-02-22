import styled from 'styled-components';
import { colors as defaultColors } from '../../../styles/defaults';

export const Body = styled.p`
  @media only screen and (min-width: 640px) {
    font-size: 14px;
  }
  font-size: 12px;
  color: ${defaultColors.default};
`;
