"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** A super lame component that says Hello with a custom message. */
function HelloWorld(_ref) {
  var message = _ref.message;
  return _react.default.createElement("div", null, "Hello ", message);
}

HelloWorld.defaultProps = {
  message: "World"
};
var _default = HelloWorld;
exports.default = _default;