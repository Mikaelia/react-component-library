"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ProgressBar = _interopRequireDefault(require("../ProgressBar"));

var _EyeIcon = _interopRequireDefault(require("../EyeIcon"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** Password input with integrated label, quality tips, and show password toggle. */
var PasswordInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PasswordInput, _React$Component);

  function PasswordInput(props) {
    var _this;

    _classCallCheck(this, PasswordInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PasswordInput).call(this, props));

    _this.toggleShowPassword = function (event) {
      _this.setState(function (prevState) {
        return {
          showPassword: !prevState.showPassword
        };
      });

      if (event) event.preventDefault();
    };

    _this.state = {
      showPassword: false
    };
    return _this;
  }

  _createClass(PasswordInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          htmlId = _this$props.htmlId,
          value = _this$props.value,
          label = _this$props.label,
          error = _this$props.error,
          onChange = _this$props.onChange,
          placeholder = _this$props.placeholder,
          maxLength = _this$props.maxLength,
          showVisibilityToggle = _this$props.showVisibilityToggle,
          quality = _this$props.quality,
          props = _objectWithoutProperties(_this$props, ["htmlId", "value", "label", "error", "onChange", "placeholder", "maxLength", "showVisibilityToggle", "quality"]);

      var showPassword = this.state.showPassword;
      return _react.default.createElement(_TextInput.default, Object.assign({
        htmlId: htmlId,
        label: label,
        placeholder: placeholder,
        type: showPassword ? "text" : "password",
        onChange: onChange,
        value: value,
        maxLength: maxLength,
        error: error,
        required: true
      }, props), showVisibilityToggle && _react.default.createElement("a", {
        href: "",
        onClick: this.toggleShowPassword,
        style: {
          marginLeft: 5
        }
      }, _react.default.createElement(_EyeIcon.default, null)), value.length > 0 && quality && _react.default.createElement(_ProgressBar.default, {
        percent: quality,
        width: 130
      }));
    }
  }]);

  return PasswordInput;
}(_react.default.Component);

PasswordInput.defaultProps = {
  maxLength: 50,
  showVisibilityToggle: false,
  label: "Password"
};
var _default = PasswordInput;
exports.default = _default;