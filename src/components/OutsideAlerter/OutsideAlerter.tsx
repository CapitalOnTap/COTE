/**
 * Component that alerts if you click outside of it
 */

import PropTypes from "prop-types";
import React, { Component } from "react";

interface Props {
  handleClickOutsideElement: () => void;
}

class OutsideAlerter extends Component<Props> {
  wrapperRef;

  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.handleClickOutsideElement();
    }
  }

  render() {
    return <div ref={this.setWrapperRef}>{this.props.children}</div>;
  }
}

(OutsideAlerter as any).propTypes = {
  children: PropTypes.node.isRequired,
  handleClickOutsideElement: PropTypes.func
};

export default OutsideAlerter;
