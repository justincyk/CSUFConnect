import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import {
  AuthenticationContainer,
  AuthenticationForms,
} from "./authentication.styles.jsx";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <h1>Please Sign In to Access CSUF Connect</h1>
      <AuthenticationForms>
        <SignInForm />
        <SignUpForm />
      </AuthenticationForms>
    </AuthenticationContainer>
  );
};

export default Authentication;
