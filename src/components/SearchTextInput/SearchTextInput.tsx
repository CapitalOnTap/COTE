import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from '../TextInput/TextInput';
import styled from 'styled-components';
import ResultsList from '../ResultsList/ResultsList';
import { Option } from '../types';

const Wrapper = styled.div<{ full?: boolean }>`
  position: relative;
  width: ${props => (props.full ? null : 'fit-content')};
`;

interface Props {
  placeholder: string;
  handleInputChange: () => void;
  results: Option[];
  handleResultSelected;
  error?: boolean;
  required?: boolean;
  full?: boolean;
}

const SearchTextInput: React.SFC<Props> = ({
  placeholder,
  handleInputChange,
  results,
  handleResultSelected,
  required,
  full,
  ...props
}) => {
  return (
    <Wrapper full={full}>
      <StyledInput
        placeholder={placeholder}
        full={full}
        onChange={handleInputChange}
        invalid={required}
        {...props}
      />
      {results.length > 0 && (
        <ResultsList
          results={results}
          handleResultSelected={handleResultSelected}
        />
      )}
    </Wrapper>
  );
};

(SearchTextInput as any).propTypes = {
  placeholder: PropTypes.string,
  /** Callback that returns search criteria */
  handleInputChange: PropTypes.func,
  /** Array of possible results */
  results: PropTypes.array,
  /** Callback to retrieve the selected result */
  handleResultSelected: PropTypes.func,
  full: PropTypes.bool
};

SearchTextInput.defaultProps = {
  placeholder: 'Type something to search',
  handleInputChange: () => console.log('input changed'),
  results: [],
  handleResultSelected: val => console.log(`Result ${val} selected`),
  full: false
};

export default SearchTextInput;
