import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DatePicker } from "@mui/x-date-pickers";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { selectUser, setUser } from "../../store/user/userSlice";

import { createAccount } from "../../utils/firebase/firebase.utils";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  birthday: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, password, confirmPassword, birthday } =
    formFields;

  const dispatch = useDispatch();

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // confirm passwords match
    if (password != confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (email.split("@")[1] !== "csu.fullerton.edu") {
      alert("Only CSUF emails can be used to create an account!");
      return;
    }
    try {
      const user = await createAccount(email, password);
      dispatch(setUser(user));
      console.log(user);
      resetFields();
    } catch (error) {
      if (error.code == "auth/email-already-inuse") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // [name] makes it so that the value of name is put in place rather than name itself
    setFormFields({ ...formFields, [name]: value });
  };

  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div className="sign-up-container">
      <h2>Don't Have an Account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="First Name"
          type="text"
          required
          onChange={handleChange}
          name="firstName"
          value={firstName}
        />
        <FormInput
          label="Last Name"
          type="text"
          required
          onChange={handleChange}
          name="lastName"
          value={lastName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <DatePicker
          label="Birthday"
          value={birthday}
          onChange={handleChange}
          name="birthday"
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
