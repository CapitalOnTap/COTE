import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../atoms/Icon/Icon';
import { colors } from '../../styles/defaults';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;

const Step = styled.div<{ width?: number }>`
  display: flex;
  width: ${props => props.width + '%'};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 400px) {
    font-size: 10px;
  }
`;

const BarWrapper = styled.div`
  height: 4px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 25px;
  width: 100%;
  margin-top: 1em;
`;

const Progress = styled.div<{ value?: number }>`
  width: ${props => (props.value ? `${props.value}%` : 0)};
  height: 100%;
  background-color: ${props =>
    props.theme ? props.theme.colorPrimary : colors.primary};
`;

interface Props {
  steps: { icon: string; name: string }[];
  progress: number;
  currentStep: number;
}

const ProgressBar: React.SFC<Props> = props => {
  const { steps, progress, currentStep } = props;
  return (
    <Wrapper>
      {steps.map((step, index) => {
        const iconName =
          currentStep === index + 1 || index + 1 > currentStep
            ? step.icon
            : 'check';

        /**if brackground of icon should be solid/selected */
        let isSolid = currentStep === index + 1;

        let isCompleted = currentStep > index + 1 ? true : false;

        return (
          <Step key={index} width={100 / steps.length}>
            <Icon
              name={iconName}
              solid={isSolid}
              primary={isCompleted}
              circle
            />
            <span style={{ fontWeight: 'bold' }}>{step.name}</span>
          </Step>
        );
      })}
      <BarWrapper>
        <Progress value={progress} />
      </BarWrapper>
    </Wrapper>
  );
};

(ProgressBar as any).propTypes = {
  items: PropTypes.array,
  /** A Value between 0 and 100 */
  progress: PropTypes.number
};

(ProgressBar as any).defaultProps = {
  currentStep: 1,
  steps: [
    { icon: 'hourglass_empty', name: 'Step 1' },
    { icon: 'person_outline', name: 'Step 2' },
    { icon: 'person_outline', name: 'Step 3' },
    { icon: 'credit_card', name: 'Step 4' }
  ],
  progress: 75
};

export default ProgressBar;
