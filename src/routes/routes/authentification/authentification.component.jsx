import SignUpForm from "../../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../../components/sign-in-form/sign-in-form.component";
import './authentification.styles.scss';

const Authentication = () => {
  return (
    <div class="authentification-container">
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
};

export default Authentication;