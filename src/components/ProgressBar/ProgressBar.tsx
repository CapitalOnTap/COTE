import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;

const BarWrapper = styled.div<{ height?: number }>`
  height: ${props => `${props.height}px`};
  margin-bottom: 20px;
  overflow: visible;
  background-color: ${props => props.theme.colorLightGrey};
  border-radius: 25px;
  width: 100%;
  margin-top: 1em;
`;

const Progress = styled.div<{ value?: number }>`
  width: ${props => (props.value ? `${props.value}%` : 0)};
  height: 100%;
  background-color: ${props => (props.theme ? props.theme.colorPrimary : defaultColors.primary)};
  border-radius: 25px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

interface Props {
  progress: number;
  height: number;
  data: { title: string; max: number | string; min: number; current: number | string };
}

const ProgressBar: React.SFC<Props> = props => {
  const { progress, data, height } = props;

  return (
    <Wrapper {...props}>
      <TextWrapper>
        <span>{data.title}</span>
        <span>{data.current}</span>
      </TextWrapper>
      <BarWrapper height={height}>
        <Progress value={progress} />
        <TextWrapper>
          <span>{data.min}</span>
          <span>{data.max}</span>
        </TextWrapper>
      </BarWrapper>
    </Wrapper>
  );
};

(ProgressBar as any).propTypes = {
  /** A Value between 0 and 100 */
  progress: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.object
};

(ProgressBar as any).defaultProps = {
  progress: 75,
  height: 8,
  data: { title: 'Spending up-to-date:', max: '£5,000', min: '£0', current: '£3,850' }
};

export default ProgressBar;
