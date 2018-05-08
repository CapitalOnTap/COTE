import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Paper from "../Paper/Paper";
import { colors as defaultColors } from "../../styles/defaults";

const Wrapper = styled(Paper)`
  position: absolute;
  top: 48px;
  min-height: auto;
  max-height: 17em;
  overflow: auto;
  width: 100%;
  left: 0;
  padding: 0;
  z-index: 999;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14);
`;

const ResultWrapper = styled.div`
  cursor: pointer;
  &:hover {
    background-color: rgba(39, 177, 97, 0.6);
  }
`;

const Result = styled.span`
  padding: 1em;
  font-weight: bold;
  display: inline-block;
  width: 100%;
  &:hover {
    color: #fff;
  }
`;

const ResultsList = ({ results, handleResultSelected, lastItem, ...props }) => {
  return (
    <Wrapper {...props}>
      {results.map((result, i) => {
        return (
          <ResultWrapper key={`r-${i}`}>
            <Result onClick={() => handleResultSelected(result)}>
              {result.title}
            </Result>
          </ResultWrapper>
        );
      })}
      {lastItem && (
        <ResultWrapper key={`r-${lastItem.value}`}>
          <Result onClick={() => handleResultSelected(lastItem)}>
            {lastItem.title}
          </Result>
        </ResultWrapper>
      )}
    </Wrapper>
  );
};

ResultsList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, value: PropTypes.any })
  ),
  /** Function that is called when a result/option is clicked - the clicked result is passed as a param */
  handleResultSelected: PropTypes.func,
  /** An item added at the end of the results list - can be used tor "can't find my option" scenarios */
  lastItem: PropTypes.shape({ title: PropTypes.string, value: PropTypes.any })
};

ResultsList.defaultProps = {
  results: [],
  handleResultSelected: result => console.log(`Result ${result.title} clicked`),
  lastItem: null
};

export default ResultsList;
