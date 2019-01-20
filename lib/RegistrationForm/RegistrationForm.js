"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _PasswordInput = _interopRequireDefault(require("../PasswordInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** Registration form with built-in validation. */
var RegistrationForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RegistrationForm, _React$Component);

  function RegistrationForm(props) {
    var _this;

    _classCallCheck(this, RegistrationForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RegistrationForm).call(this, props));

    _this.onChange = function (event) {
      var user = _this.state.user;
      user[event.target.name] = event.target.value;

      _this.setState({
        user: user
      });
    };

    _this.onSubmit = function () {
      var user = _this.state.user;

      var formIsValid = _this.validate(user);

      if (formIsValid) {
        _this.props.onSubmit(user);

        _this.setState({
          submitted: true
        });
      }
    };

    _this.state = {
      user: {
        email: "",
        password: ""
      },
      errors: {},
      submitted: false
    };
    return _this;
  }

  _createClass(RegistrationForm, [{
    key: "passwordQuality",
    // Returns a number from 0 to 100 that represents password quality.
    // For simplicity, just returning % of min length entered.
    // Could enhance with checks for number, special char, unique characters, etc.
    value: function passwordQuality(password) {
      if (!password) return null;
      if (password.length >= this.props.minPasswordLength) return 100;
      var percentOfMinLength = parseInt(password.length / this.props.minPasswordLength * 100, 10);
      return percentOfMinLength;
    }
  }, {
    key: "validate",
    value: function validate(_ref) {
      var email = _ref.email,
          password = _ref.password;
      var errors = {};
      var minPasswordLength = this.props.minPasswordLength;
      if (!email) errors.email = "Email required.";
      if (password.length < minPasswordLength) errors.password = "Password must be at least ".concat(minPasswordLength, " characters.");
      this.setState({
        errors: errors
      });
      var formIsValid = Object.getOwnPropertyNames(errors).length === 0;
      return formIsValid;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          errors = _this$state.errors,
          submitted = _this$state.submitted;
      var _this$state$user = this.state.user,
          email = _this$state$user.email,
          password = _this$state$user.password;
      return submitted ? _react.default.createElement("h2", null, this.props.confirmationMessage) : _react.default.createElement("div", null, _react.default.createElement(_TextInput.default, {
        htmlId: "registration-form-email",
        name: "email",
        onChange: this.onChange,
        label: "Email",
        value: email,
        error: errors.email,
        required: true
      }), _react.default.createElement(_PasswordInput.default, {
        htmlId: "registration-form-password",
        name: "password",
        value: password,
        onChange: this.onChange,
        quality: this.passwordQuality(password),
        showVisibilityToggle: true,
        maxLength: 50,
        error: errors.password
      }), _react.default.createElement("input", {
        type: "submit",
        value: "Register",
        onClick: this.onSubmit
      }));
    }
  }]);

  return RegistrationForm;
}(_react.default.Component);

RegistrationForm.defaultProps = {
  confirmationMessage: "Thanks for registering!",
  minPasswordLength: 8
};
var _default = RegistrationForm;
exports.default = _default;