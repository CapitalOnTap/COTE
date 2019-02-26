import styled from 'styled-components';
import { colors as defaultColors, fontWeights } from '../../../styles/defaults';

interface HeadingProps {
  inverse?: boolean;
  highlight?: boolean;
  secondary?: boolean;
  primary?: boolean;
}

interface TitleProps {
  light?: boolean;
  bold?: boolean;
}

const Heading = styled.h1<HeadingProps>`
  color: ${props => {
    if (props.inverse) return '#fff';

    if (props.highlight) {
      return props.theme.colorHighlight ? props.theme.colorHighlight : defaultColors.highlight;
    }
    if (props.secondary) {
      return props.theme.colorSecondary ? props.theme.colorSecondary : defaultColors.secondary;
    }
    if (props.primary) {
      return props.theme.colorPrimary ? props.theme.colorPrimary : defaultColors.primary;
    }

    return props.theme.colorDefault ? props.theme.colorDefault : defaultColors.default;
  }};
  font-size: 36px;
  font-weight: ${fontWeights.bold};
`;

export const Heading1 = Heading;
Heading1.displayName = 'Heading1';

export const Heading2 = styled(Heading.withComponent('h2'))`
  font-size: 30px;
`;
Heading2.displayName = 'Heading2';

export const Heading3 = styled(Heading.withComponent('h3'))`
  font-size: 22px;
`;
Heading3.displayName = 'Heading3';

export const Subheading = styled(Heading.withComponent('h4'))`
  font-size: 18px;
`;
Heading3.displayName = 'Subheading';

export const Title = styled(Heading.withComponent('h5'))<TitleProps>`
  font-size: 16px;
  font-weight: ${props => {
    if (props.light) return fontWeights.light;

    if (props.bold) return fontWeights.bold;

    return fontWeights.normal;
  }};
`;
Title.displayName = 'Title';

export const Subtitle = styled(Heading.withComponent('h6'))`
  font-size: 15px;
  font-weight: ${fontWeights.light};
`;
Subtitle.displayName = 'Subtitle';

export default Heading;
