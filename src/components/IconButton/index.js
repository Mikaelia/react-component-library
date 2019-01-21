import { themr } from "react-css-themr";
import { ICONBUTTON } from "../identifiers";
import theme from "./theme.module.scss";
import IconButton from "./IconButton";

const ThemedIconButton = themr(ICONBUTTON, theme)(IconButton);

export default ThemedIconButton;
