"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ProgressBar = _interopRequireDefault(require("./ProgressBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("ProgressBar", function () {
  test("getWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50", function () {
    // get reference to component
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_ProgressBar.default, {
      percent: 50,
      width: 500
    }));
    var width = wrapper.instance().getWidthAsPercentOfTotalWidth();
    expect(width).toEqual(250);
  });
});