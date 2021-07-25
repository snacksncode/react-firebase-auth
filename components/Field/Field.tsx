import classNames from "classnames";
import React from "react";
import styles from "./Field.module.scss";

interface FieldProps {
  label: string;
  type: "text" | "password";
  error?: boolean;
  errorText?: string;
}

const Field = ({ label, error, errorText }: FieldProps) => {
  console.log(error, styles["wrapper--error"]);
  const _label = label.toLowerCase();
  const inputClasses = classNames(styles.input, {
    [styles["input--error"]]: error,
  });
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={_label}>
        {label}
      </label>
      <input className={inputClasses} id={_label} name={_label} />
      {error && errorText && <div className={styles.errorText}>{errorText}</div>}
    </div>
  );
};

export default Field;
