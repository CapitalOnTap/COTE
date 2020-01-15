import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

const wrapStyleDefault = {
  position: 'relative',
  //   display: 'inline-block',
  overflow: 'hidden'
};

function withRipples(WrappedComponent) {
  return class WithRipples extends PureComponent {
    static propTypes = {
      during: PropTypes.number,
      onClick: PropTypes.func
    };

    static defaultProps = {
      during: 600,
      onClick: () => {}
    };

    constructor(props) {
      super(props);

      this.state = {
        rippleStyle: {
          position: 'absolute',
          borderRadius: '50%',
          opacity: 0,
          width: 35,
          height: 35,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none'
        }
      };
    }

    componentWillUnmount() {
      clearTimeout(this.timer);
    }

    handleClick = ev => {
      if (ev.stopPropagation) {
        ev.stopPropagation();
      }

      const { onClick, during } = this.props;
      const {
        pageX,
        pageY,
        currentTarget: { offsetLeft, offsetTop, offsetWidth, offsetHeight }
      } = ev;

      const left = pageX - offsetLeft;
      const top = pageY - offsetTop;
      const size = Math.max(offsetWidth, offsetHeight);

      this.setState({
        rippleStyle: {
          ...this.state.rippleStyle,
          top,
          left,
          opacity: 1,
          transform: 'translate(-50%, -50%)',
          transition: 'initial'
        }
      });

      this.timer = setTimeout(() => {
        this.setState({
          rippleStyle: {
            ...this.state.rippleStyle,
            opacity: 0,
            transform: `scale(${size / 9})`,
            transition: `all ${during}ms`
          }
        });
      });

      if (typeof onClick === 'function') {
        onClick(ev);
      }
    };

    render() {
      const { children, style, during, color, ...props } = this.props;

      const { state, handleClick } = this;

      const wrapStyle = {
        ...style,
        ...wrapStyleDefault
      };

      return (
        <WrappedComponent {...props} style={wrapStyle} onClick={handleClick}>
          {children}
          <s style={state.rippleStyle} />
        </WrappedComponent>
      );
    }
  };
}

export default withRipples;
