import React from "react";
import styles from "./SignUpForm.module.scss";
import Field from "../Field";

const SignUpForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Sign Up</div>
      <Field label="Email" />
    </div>
  );
};

export default SignUpForm;
