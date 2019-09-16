import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { Tooltip as CotTooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import TooltipContent from '../TooltipContent/index';
import Icon from '../atoms/Icon/Icon';

const TooltipIcon = styled(Icon)`
  cursor: pointer;
  padding: 0 10px;
  vertical-align: middle;
`;

interface Props {
  title: string;
  description: string;
  position?: string;
  withoutLabel?: boolean;
  label?: string;
  trigger?: string;
  icon?: string;
  interactive?: boolean;
}

const Tooltip: React.FC<Props> = ({
  title,
  description,
  position,
  withoutLabel,
  label,
  trigger,
  icon,
  interactive
}) => {
  return (
    <Flex alignItems="center">
      {!withoutLabel && label}
      <CotTooltip
        arrow
        inertia
        theme="light"
        position={position}
        trigger={trigger}
        interactive={interactive}
        html={<TooltipContent title={title} description={description} />}
      >
        <TooltipIcon name={icon} />
      </CotTooltip>
    </Flex>
  );
};

(Tooltip as any).propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  position: PropTypes.string,
  label: PropTypes.string
};

Tooltip.defaultProps = {
  title: 'This is some tooltip title.',
  description: 'This is some tooltip description content.',
  position: 'top',
  label: 'Tooltip label',
  icon: 'info'
};

export default Tooltip;
