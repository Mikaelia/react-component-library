import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";
import theme from "./theme.module.css";

describe("Button", () => {
  describe("#render", () => {
    it("uses flat and neutral styles by default", () => {
      const wrapper = shallow(<Button theme={theme}>Hello</Button>);
      const { className } = wrapper.find("button").props();
      expect(className).toContain(theme.flat);
      expect(className).toContain(theme.neutral);
    });

    it("renders text as child", () => {
      const wrapper = shallow(<Button theme={theme}>Hello</Button>);
      expect(wrapper.text()).toEqual("Hello");
    });
    it("renders icon element", () => {
      const wrapper = shallow(<Button icon="bird" theme={theme} />);
      expect(wrapper.text()).toContain("<FontIcon />");
    });

    it("changes to anchor tag with href", () => {
      const wrapper = shallow(<Button href="www.blah.com" theme={theme} />);
      expect(wrapper.type()).toEqual("a");
    });

    it("renders accent button with accent style", () => {
      const wrapper = shallow(<Button accent theme={theme} />);
      const { className } = wrapper.find("button").props();
      expect(className).toContain(theme.flat);
      expect(className).toContain(theme.accent);
    });

    it("renders mini button with mini style", () => {
      const wrapper = shallow(<Button round mini theme={theme} />);
      const { className } = wrapper.find("button").props();
      expect(className).toContain(theme.round);
      expect(className).toContain(theme.neutral);
      expect(className).toContain(theme.mini);
    });

    it("renders mini primary button with both styles", () => {
      const wrapper = shallow(<Button primary mini theme={theme} />);
      const { className } = wrapper.find("button").props();
      expect(className).toContain(theme.flat);
      expect(className).toContain(theme.primary);
      expect(className).toContain(theme.mini);
    });

    it("renders inner text", () => {
      const wrapper = shallow(
        <Button primary mini theme={theme}>
          I am a button
        </Button>
      );
      const { className } = wrapper.find("button").props();
      expect(className).toContain(theme.flat);
      expect(className).toContain(theme.primary);
      expect(className).toContain(theme.mini);
    });
  });
});
