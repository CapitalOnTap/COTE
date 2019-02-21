import styled from 'styled-components';
import { colors as defaultColors, fontWeights } from '../../../styles/defaults';

const Small = styled.span<{ reverse?: boolean }>`
  display: inline-block;
  font-size: 10px;
  font-weight: ${fontWeights.normal};
  color: ${props => {
    if (props.reverse) return '#fff';

    if (props.theme) return props.theme.colorDefaultLight;

    return defaultColors.defaultLight;
  }};
`;

export default Small;
