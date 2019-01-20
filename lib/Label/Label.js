"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Label with required field display, htmlFor, and block styling */
function Label(_ref) {
  var htmlFor = _ref.htmlFor,
      label = _ref.label,
      required = _ref.required;
  return _react.default.createElement("label", {
    style: {
      display: "block"
    },
    htmlFor: htmlFor
  }, label, " ", required && _react.default.createElement("span", {
    style: {
      color: "red"
    }
  }, " *"));
}

var _default = Label;
exports.default = _default;