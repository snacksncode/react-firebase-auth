import React from "react";
import styles from "./SignUpForm.module.scss";
import Field from "../Field";
import Button from "../Button";
import { useAuth } from "../../contexts/authContext";

const SignUpForm = () => {
  const { signUp } = useAuth();

  const handleSubmit = () => {
    signUp("test@test.com", "password");
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sign Up</h1>
      <form className={styles.form}>
        <Field label="Email" type="text" />
        <Field
          label="Password"
          errorText="Password needs to be at least 6 characters long"
          error={true}
          type="password"
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
