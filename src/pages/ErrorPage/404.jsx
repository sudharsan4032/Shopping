import React from "react";
import {
  Emoji,
  ErrorContainer,
  ErrorMsg,
  GoBackButton,
} from "./404.styles.jsx";

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <Emoji>⚠️</Emoji>
      <ErrorMsg>Page not found!</ErrorMsg>
      <GoBackButton to='/'>
        <h4>Go home</h4>
      </GoBackButton>
    </ErrorContainer>
  );
};

export default ErrorPage;
