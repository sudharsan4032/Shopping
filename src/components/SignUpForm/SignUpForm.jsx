import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./SignUpForm.Styles.jsx";
import { SignUpContainer, SignUpFormHead } from "./SignUpForm.Styles.jsx";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match!");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );
      // Create the user document
      await createUserDocumentFromAuth(user, { displayName });
      // Reset the form
      resetFormFields();
      console.log("Account created successfully!");
      // Redirect to home page
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User already exists!");
      }
      console.log("User creation encounteres an error", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpFormHead>Don't have an acount?</SignUpFormHead>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          value={displayName}
          required
          onChange={handleChange}
          name='displayName'
        />

        <FormInput
          label='Email'
          type='email'
          value={email}
          required
          onChange={handleChange}
          name='email'
        />

        <FormInput
          label='Password'
          type='password'
          value={password}
          required
          onChange={handleChange}
          name='password'
        />

        <FormInput
          label='Confirm Passord'
          type='password'
          value={confirmPassword}
          required
          onChange={handleChange}
          name='confirmPassword'
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
