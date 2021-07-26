import classNames from "classnames";
import React, { useState } from "react";
import PeekIcon from "../PeekIcon";
import styles from "./Field.module.scss";

interface FieldProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  label: string;
  type: "text" | "password";
  error?: boolean;
  valid?: boolean;
  errorText?: string;
  name: string;
}

const Field = ({ value, handleChange, label, error, errorText, type, valid, name }: FieldProps) => {
  const _fieldId = label.toLowerCase();
  const [isPeeked, setIsPeeked] = useState(false); //this one is used only for password fields
  const isPassword = type === "password";
  const inputWrapperClasses = classNames(styles.inputWrapper, {
    [styles["inputWrapper--error"]]: error,
    [styles["inputWrapper--valid"]]: valid,
  });

  const togglePeek = () => {
    setIsPeeked((oldState) => !oldState);
  };

  const getType = (): string => {
    if (!isPassword) return type;
    return isPeeked ? "text" : "password";
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={_fieldId}>
        {label}
      </label>
      <div className={inputWrapperClasses}>
        <input
          value={value}
          onChange={handleChange}
          className={styles.input}
          type={getType()}
          id={_fieldId}
          name={name}
        />
        {isPassword && (
          <div className={styles.passwordPeek}>
            <PeekIcon onClick={togglePeek} isPeeked={isPeeked} />
          </div>
        )}
      </div>
      {error && errorText && <div className={styles.errorText}>{errorText}</div>}
    </div>
  );
};

export default Field;
