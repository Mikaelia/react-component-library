import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { isValuePresent } from "../../utils/utils";
import FontIcon from "../FontIcon/FontIcon";
import inputTheme from "./theme.module.scss";

class Input extends React.Component {
  componentDidMount() {
    if (this.props.multiline) {
      window.addEventListener("resize", this.handleAutoresize);
      this.handleAutoresize();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.multiline && nextProps.multiline) {
      window.addEventListener("resize", this.handleAutoresize);
    } else if (this.props.multiline && !nextProps.multiline) {
      window.removeEventListener("resize", this.handleAutoresize);
    }
  }

  componentDidUpdate() {
    // resize the textarea, if nessesary
    if (this.props.multiline) this.handleAutoresize();
  }

  componentWillUnmount() {
    if (this.props.multiline)
      window.removeEventListener("resize", this.handleAutoresize);
  }

  handleChange = event => {
    const { onChange, maxLength } = this.props;
    const valueFromEvent = event.target.value;

    // Trim value to maxLength if that exists (only on multiline inputs).
    // Note that this is still required even tho we have the onKeyPress filter
    // because the user could paste smt in the textarea.
    const haveToTrim = maxLength && event.target.value.length > maxLength;
    console.log(haveToTrim);
    const value = haveToTrim
      ? valueFromEvent.substr(0, maxLength)
      : valueFromEvent;
    console.log(value);
    // propagate to to store and therefore to the input
    if (onChange) onChange(value, event);
  };

  handleAutoresize = () => {
    const element = this.inputNode;
    const { rows } = this.props;

    if (typeof rows === "number" && !Number.isNaN(rows)) {
      element.style.height = null;
    } else {
      // compute the height difference between inner height and outer height
      const style = getComputedStyle(element, null);
      const heightOffset =
        style.boxSizing === "content-box"
          ? -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom))
          : parseFloat(style.borderTopWidth) +
            parseFloat(style.borderBottomWidth);

      // resize the input to its content size
      element.style.height = "auto";
      element.style.height = `${element.scrollHeight + heightOffset}px`;
    }
  };

  handleKeyPress = event => {
    // prevent insertion of more characters if we're a multiline input
    // and maxLength exists
    const { multiline, maxLength, onKeyPress } = this.props;
    if (multiline && maxLength) {
      // check if smt is selected, in which case the newly added charcter would
      // replace the selected characters, so the length of value doesn't actually
      // increase.
      const isReplacing =
        event.target.selectionEnd - event.target.selectionStart;
      const { value } = event.target;

      if (!isReplacing && value.length === maxLength) {
        event.preventDefault();
        event.stopPropagation();
        return undefined;
      }
    }

    if (onKeyPress) onKeyPress(event);
    return undefined;
  };

  blur() {
    this.inputNode.blur();
  }

  focus() {
    this.inputNode.focus();
  }

  render() {
    const {
      defaultValue,
      disabled,
      error,
      floating,
      hint,
      icon,
      name,
      label: labelText,
      maxLength,
      multiline,
      required,
      type,
      value,
      onKeyPress,
      ...others
    } = this.props;

    const length = maxLength && value ? value.length : 0;

    // Generate classNames for label element
    const labelClassName = classnames(inputTheme.label, {
      [inputTheme.fixed]: !floating
    });

    // Generate input element wrapper classNames
    const wrapperClassName = classnames(
      inputTheme.input,
      {
        [inputTheme.disabled]: disabled,
        [inputTheme.errored]: error,
        [inputTheme.hidden]: type === "hidden",
        [inputTheme.withIcon]: icon
      },
      this.props.className
    );

    // Determine if initial value is set
    const valuePresent = isValuePresent(value) || isValuePresent(defaultValue);

    // Input element classNames
    let elementClassName = classnames(inputTheme.inputElement, {
      [inputTheme.filled]: valuePresent
    });

    // Generate props object for input element
    const inputElementProps = {
      ...others,
      name,
      defaultValue,
      disabled,
      required,
      type,
      value
    };

    // Determine type of input
    let Element;
    let keyPress;

    if (!multiline) {
      Element = "input";
      keyPress = onKeyPress;
    } else {
      // keypress handler for textarea
      keyPress = this.handleKeyPress;
      Element = "textarea";
    }

    return (
      <div className={wrapperClassName}>
        <Element
          {...inputElementProps}
          ref={node => {
            this.inputNode = node;
          }}
          onChange={this.handleChange}
          onKeyPress={keyPress}
          className={elementClassName}
        />
        {icon ? <FontIcon className={inputTheme.icon} value={icon} /> : null}
        <span className={inputTheme.bar} />
        {labelText ? (
          <label className={labelClassName}>
            {labelText}
            {required ? <span className={inputTheme.required}> * </span> : null}
          </label>
        ) : null}
        {hint ? (
          <span hidden={labelText} className={inputTheme.hint}>
            {hint}
          </span>
        ) : null}
        {error ? <span className={inputTheme.error}>{error}</span> : null}
        {maxLength ? (
          <span className={inputTheme.counter}>{`${length}/${maxLength}`}</span>
        ) : null}
      </div>
    );
  }
}

Input.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  error: PropTypes.PropTypes.PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node
  ]),
  floating: PropTypes.bool,
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  maxLength: PropTypes.number,
  multiline: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  required: PropTypes.bool,
  theme: PropTypes.shape({
    bar: PropTypes.string,
    counter: PropTypes.string,
    disabled: PropTypes.string,
    error: PropTypes.string,
    errored: PropTypes.string,
    hidden: PropTypes.string,
    hint: PropTypes.string,
    icon: PropTypes.string,
    input: PropTypes.string,
    inputElement: PropTypes.string,
    required: PropTypes.string,
    withIcon: PropTypes.string
  }),
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.string
  ])
};

Input.defaultProps = {
  className: "",
  hint: "",
  floating: true,
  multiline: false,
  required: false,
  type: "text"
};

export default Input;
