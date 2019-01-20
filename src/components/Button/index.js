import { themr } from "react-css-themr";
import { BUTTON } from "../identifiers";
import theme from "./theme.module.scss";
import Button from "./Button";

const ThemedButton = themr(BUTTON, theme)(Button);

export default ThemedButton;
