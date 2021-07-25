import React, { useState } from "react";
import styles from "./SignUpForm.module.scss";
import Field from "../Field";
import Button from "../Button";
import { useAuth } from "../../contexts/authContext";

const SignUpForm = () => {
  const { signUp } = useAuth();
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    // signUp("test@test.com", "password");
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sign Up</h1>
      <form className={styles.form}>
        <Field label="Email" type="text" />
        <Field label="Password" type="password" />
        <Button text="Submit" onClick={handleSubmit} loading={loading} />
      </form>
    </div>
  );
};

export default SignUpForm;
