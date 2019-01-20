import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import FontIcon from "../FontIcon/FontIcon";

/** Button */
class Button extends Component {
  getLevel = () => {
    if (this.props.primary) return "primary";
    if (this.props.accent) return "accent";
    return "neutral";
  };

  getShape = () => {
    if (this.props.raised) return "raised";
    if (this.props.round) return "round";
    return "flat";
  };

  handleMouseUp = event => {
    this.buttonNode.blur();
    if (this.props.onMouseUp) this.props.onMouseUp(event);
  };

  handleMouseLeave = event => {
    this.buttonNode.blur();
    if (this.props.onMouseLeave) this.props.onMouseLeave(event);
  };

  render() {
    const {
      accent, // eslint-disable-line
      children,
      className,
      flat, // eslint-disable-line
      round, // eslint-disable-line
      href,
      icon,
      inverse,
      label,
      mini,
      neutral,
      primary, // eslint-disable-line
      raised, // eslint-disable-line
      theme,
      type,
      ...others
    } = this.props;
    const Element = href ? "a" : "button";
    const level = this.getLevel();
    const shape = this.getShape();
    const mouseEvents = {
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave
    };

    const classes = classnames(
      theme.button,
      [theme[shape]],
      {
        [theme[level]]: neutral,
        [theme.mini]: mini,
        [theme.inverse]: inverse
      },
      className
    );

    const props = {
      ...others,
      ...mouseEvents,
      href,
      ref: node => {
        this.buttonNode = node;
      },
      className: classes,
      disabled: this.props.disabled,
      type: !href ? type : null,
      data: "button"
    };

    return (
      <Element props={props} className={classes}>
        {icon && <FontIcon className={theme.icon} value={icon} />}
        {label}
        {children}
      </Element>
    );
  }
}

Button.propTypes = {
  /** Set button to primary color */
  accent: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  flat: PropTypes.bool,
  /** Creates circular floated button*/
  round: PropTypes.bool,
  /** Link to add to button */
  href: PropTypes.string,
  /** Adds icon to button (MaterialUI) */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  inverse: PropTypes.bool,
  label: PropTypes.string,
  mini: PropTypes.bool,
  neutral: PropTypes.bool,
  /** Function to run on mouse leave */
  onMouseLeave: PropTypes.func,
  /** Function to run on mouse up */
  onMouseUp: PropTypes.func,
  /** Set button to primary color */
  primary: PropTypes.bool,
  /** Creates rectangular floated button */
  raised: PropTypes.bool,
  theme: PropTypes.shape({
    accent: PropTypes.string,
    button: PropTypes.string,
    flat: PropTypes.string,
    round: PropTypes.string,
    icon: PropTypes.string,
    inverse: PropTypes.string,
    mini: PropTypes.string,
    neutral: PropTypes.string,
    primary: PropTypes.string,
    raised: PropTypes.string,
    toggle: PropTypes.string
  }),
  type: PropTypes.string
};

Button.defaultProps = {
  accent: false,
  className: "",
  flat: false,
  round: false,
  mini: false,
  neutral: true,
  primary: false,
  raised: false,
  type: "button"
};
// allows export without styles
export default Button;
