import PropTypes from 'prop-types';
import React from 'react';
import MaskedInput from 'react-text-mask';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import styled from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';
import Icon from '../atoms/Icon/Icon';
import { Caption, Label } from '../atoms/Typography';
import TooltipContent from '../TooltipContent';

export const StyledInput = styled.input`
  &::placeholder {
    color: lightgrey;
  }
  margin-bottom: ${props => (props.invalid ? '8px' : null)};
  color: ${defaultColors.colorDarkBlue};
  border: ${props => {
    if (props.invalid && props.theme.colorDanger)
      return `1px solid ${props.theme.colorDanger}`;

    if (props.invalid) return 'solid 1px red';

    return `solid 1px ${defaultColors.black}`;
  }};

  border-radius: 4px;
  padding: 9px 16px;
  width: ${props => (props.full ? '100%' : null)};
  height: 36px;
`;

const Input = styled(MaskedInput)`
  &::placeholder {
    color: lightgrey;
  }
  margin-bottom: ${props => (props.invalid ? '8px' : null)};
  color: ${defaultColors.colorDarkBlue};
  border: ${props => {
    if (props.invalid && props.theme.colorDanger)
      return `1px solid ${props.theme.colorDanger}`;

    if (props.invalid) return 'solid 1px red';

    return `solid 1px ${defaultColors.black}`;
  }};

  border-radius: 4px;
  padding: 9px 16px;
  width: ${props => (props.full ? '100%' : null)};
  height: 36px;
`;

const InputWrapper = styled.div`
  width: ${props => (props.full ? '100%' : null)};
`;

const TooltipIcon = styled(Icon)`
  cursor: pointer;
`;

const TextInput = ({
  labelText,
  placeholder,
  mask,
  guide,
  full,
  error,
  required,
  info,
  className,
  name,
  onChange,
  tooltip,
  ...props
}) => {
  return (
    <InputWrapper full={full}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {labelText && (
          <Label required={required} text={labelText} htmlFor={name} />
        )}
        {tooltip && (
          <Tooltip
            arrow
            inertia
            theme="light"
            html={
              <TooltipContent
                title={tooltip.title}
                description={tooltip.description}
              />
            }
          >
            <TooltipIcon name="info" />
          </Tooltip>
        )}
      </div>
      <Input
        className={className}
        placeholder={placeholder}
        name={name}
        {...props}
        invalid={required ? 1 : 0}
        mask={mask ? mask : false}
        guide={guide}
        full={full ? 1 : 0}
        onChange={onChange}
      />

      {error && <Caption required={required} text={error} />}
      {info && <Caption style={{ marginTop: '8px' }} text={info} />}
    </InputWrapper>
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  /** Error message to show if input is not valid */
  error: PropTypes.string,
  /** Information related to this input field */
  info: PropTypes.string,
  /** Regex pattern mask array to be applied to the input. E.g. Phone format, address, post code, sort code.*/
  mask: PropTypes.any,
  /** If text input should stretch to fill its parent container */
  full: PropTypes.bool,
  /** Show guides for user to know how many characters left */
  guide: PropTypes.bool,
  /** Label for input */
  labelText: PropTypes.string,
  /** Input name */
  name: PropTypes.string,
  tooltip: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
};

TextInput.defaultProps = {
  placeholder: 'Type something',
  error: '',
  info: '',
  full: false,
  guide: false,
  labelText: '',
  mask: false,
  name: '',
  tooltip: null
};

TextInput.displayName = 'TextInput';

export default TextInput;
