import React from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./Button.Styles.jsx";

export const BUTTON_TYPES_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButtons = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButtons(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
