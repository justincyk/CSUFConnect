import { useState } from "react";

import { signInUser } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";

import { setUser, selectUser } from "../../store/user/userSlice";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email == "" || password == "") {
      console.log("Email/Password cannot be empty");
      return;
    }
    try {
      const { user } = await signInUser(email, password);
      const response = await user.getIdToken();
      const userProfile = {
        uid: response,
        email: user.email,
      };
      console.log(userProfile);
      dispatch(setUser(userProfile));

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrongPassword":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this emai");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already Have an Account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">SIGN IN</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
