import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import FontIcon from "../FontIcon/FontIcon";

class IconButton extends Component {
  getLevel = () => {
    if (this.props.primary) return "primary";
    if (this.props.accent) return "accent";
    return "neutral";
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
      href,
      icon,
      inverse,
      neutral,
      primary, // eslint-disable-line
      theme,
      type,
      ...others
    } = this.props;
    const Element = href ? "a" : "button";
    const level = this.getLevel();
    const classes = classnames(
      [theme.toggle],
      {
        [theme[level]]: neutral,
        [theme.inverse]: inverse
      },
      className
    );

    const props = {
      ...others,
      href,
      ref: node => {
        this.buttonNode = node;
      },
      className: classes,
      disabled: this.props.disabled,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      type: !href ? type : null,
      "data-react-toolbox": "button"
    };

    const iconElement =
      typeof icon === "string" ? (
        <FontIcon className={theme.icon} value={icon} />
      ) : (
        icon
      );

    return (
      <Element className={classes} props={props}>
        {icon && iconElement}
        {children}
      </Element>
    );
  }
}

IconButton.propTypes = {
  accent: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  inverse: PropTypes.bool,
  neutral: PropTypes.bool,
  onMouseLeave: PropTypes.func,
  onMouseUp: PropTypes.func,
  primary: PropTypes.bool,
  theme: PropTypes.shape({
    accent: PropTypes.string,
    button: PropTypes.string,
    flat: PropTypes.string,
    floating: PropTypes.string,
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

IconButton.defaultProps = {
  accent: false,
  className: "",
  neutral: true,
  primary: false,
  type: "button"
};

export default IconButton;
