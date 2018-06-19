import styled from "styled-components";
import { colors, fontWeights } from "../../../styles/defaults";

const Small = styled.span`
  display: inline-block;
  font-size: 10px;
  font-weight: ${fontWeights.normal};
  color: ${props => {
    if (props.reverse) return "#fff";

    if (props.theme) return props.theme.colorLightBlack;

    return colors.lightBlack;
  }};
`;

export default Small;
