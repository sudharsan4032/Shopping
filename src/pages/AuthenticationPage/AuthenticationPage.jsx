import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";

import { AuthenticationFormsContainer } from "./AuthenticationPage.Styles";

const AuthenticationPage = () => {
  return (
    <AuthenticationFormsContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationFormsContainer>
  );
};

export default AuthenticationPage;
