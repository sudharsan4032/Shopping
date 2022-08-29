import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import Button, { BUTTON_TYPES_CLASSES } from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import { Buttons, SignInFormContainer } from "./SignInForm.Styles";

const formFieldsValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(formFieldsValues);
  const { email, password } = formFields;

  // Google Sign In
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    // Creating user document
    console.log("Login Successfully!");
    // Redirect to home page
    navigate("/");
  };

  // Reset the form fields
  const resetFormFields = () => {
    setFormFields(formFieldsValues);
  };

  // Handles the input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // Handles the form submit - login using email ID
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      // Reset the form
      resetFormFields();
      // For Debug
      console.log("Login Successfully!");
      // Redirect to home page
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User not found!");
          break;
        case "auth/wrong-password":
          alert("Incorrect password!");
          break;
        default:
          console.log("error in sign in using email and pass!", error.message);
      }
    }
  };

  return (
    <SignInFormContainer className='sign-in-container'>
      <h2>Already have an acount?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          value={email}
          onChange={handleChange}
          name='email'
          required
        />
        <FormInput
          label='Password'
          type='password'
          value={password}
          onChange={handleChange}
          name='password'
          required
        />

        <Buttons className='buttons'>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPES_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </Button>
        </Buttons>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;
