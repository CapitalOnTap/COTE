import PropTypes from 'prop-types';
import React from 'react';
import MaskedInput from 'react-text-mask';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import styled from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';
import Icon from '../atoms/Icon/Icon';
import { Caption, Label } from '../atoms/Typography/index';
import TooltipContent from '../TooltipContent/index';

interface InputProps extends React.InputHTMLAttributes<{}> {
  invalid?: boolean;
  full?: boolean;
}

export const StyledInput = styled.input<InputProps>`
  &::placeholder {
    color: lightgrey;
  }
  margin-bottom: ${props => (props.invalid ? '8px' : null)};
  border: ${props => {
    if (props.invalid && props.theme.colorDanger) return `1px solid ${props.theme.colorDanger}`;

    if (props.invalid) return 'solid 1px red';

    return `solid 1px ${defaultColors.default}`;
  }};

  border-radius: 4px;
  padding: 9px 16px;
  width: ${props => (props.full ? '100%' : null)};
  height: 36px;
`;

const Input = styled(MaskedInput)<{ invalid?: boolean; full?: boolean; disabled?: boolean }>`
  &::placeholder {
    color: lightgrey;
  }
  margin-bottom: ${props => (props.invalid ? '8px' : null)};
  border: ${props => {
    if (props.invalid && props.theme.colorDanger) return `1px solid ${props.theme.colorDanger}`;

    if (props.invalid) return 'solid 1px red';

    return `solid 1px ${defaultColors.default}`;
  }};

  border-radius: 4px;
  padding: 9px 16px;
  width: ${props => (props.full ? '100%' : null)};
  height: 36px;
  &:disabled {
    background-color: ${props => props.theme.colorLightGrey};
  }
`;

const InputWrapper = styled.div<{ full?: boolean }>`
  width: ${props => (props.full ? '100%' : null)};
`;

const TooltipIcon = styled(Icon)`
  cursor: pointer;
`;

const InfoCaption = styled(Caption)`
  margin-top: '8px';
`;

export interface Props extends InputProps {
  labelText?: string;
  subLabelText?: string;
  mask?: any;
  guide?: boolean;
  error?: string;
  required?: boolean;
  info?: string;
  tooltip?: { title: string; description: string };
  isAutoComplete?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.SFC<Props> = ({
  labelText,
  subLabelText,
  placeholder,
  isAutoComplete,
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
  disabled,
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
        {labelText && <Label required={required} text={labelText} htmlFor={name} />}
        {tooltip && (
          <Tooltip
            arrow
            inertia
            theme="light"
            html={<TooltipContent title={tooltip.title} description={tooltip.description} />}
          >
            <TooltipIcon name="info" />
          </Tooltip>
        )}
      </div>
      {subLabelText && <Caption required={required} text={subLabelText} />}
      <Input
        className={className}
        placeholder={placeholder}
        name={name}
        {...props}
        invalid={required}
        mask={mask ? mask : rawValue => Array(rawValue.length).fill(/./)}
        guide={guide}
        full={full}
        onChange={onChange}
        autoComplete={isAutoComplete ? 'on' : 'new-password'}
        disabled={disabled}
      />

      {error && <Caption required={required} text={error} />}
      {info && <InfoCaption text={info} />}
    </InputWrapper>
  );
};

(TextInput as any).propTypes = {
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
  /** subLabel for input */
  subLabelText: PropTypes.string,
  /** Label for input */
  labelText: PropTypes.string,
  /** Input name */
  name: PropTypes.string,
  tooltip: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  }),
  isAutoComplete: PropTypes.bool
};

(TextInput as any).defaultProps = {
  placeholder: 'Type something',
  error: '',
  info: '',
  full: false,
  guide: false,
  labelText: '',
  mask: false,
  name: '',
  tooltip: null,
  isAutoComplete: false,
  disabled: false
};

TextInput.displayName = 'TextInput';

export default TextInput;
