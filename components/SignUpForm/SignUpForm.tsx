import React, { useState } from "react";
import styles from "./SignUpForm.module.scss";
import Field from "../Field";
import Button from "../Button";
import { useAuth } from "../../contexts/authContext";
import useFormValidation from "../../hooks/useFormValidation";

const DEFAULT_VALUES = {
  //object key needs to be the same as input name for hook to work
  email: "",
  password: "",
};

const SignUpForm = () => {
  // const { signUp } = useAuth();
  const { handleChange, values } = useFormValidation(DEFAULT_VALUES);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(values);
    // signUp("test@test.com", "password");
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sign Up</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Field value={values.email} handleChange={handleChange} label="Email" name="email" type="text" />
        <Field value={values.password} handleChange={handleChange} label="Password" name="password" type="password" />
        <Button role="submit" text="Create Account" loading={loading} />
      </form>
    </div>
  );
};

export default SignUpForm;
