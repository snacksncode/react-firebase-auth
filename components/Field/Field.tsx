import classNames from "classnames";
import React, { useRef, useState } from "react";
import PeekIcon from "../PeekIcon";
import styles from "./Field.module.scss";

interface FieldProps {
  label: string;
  type: "text" | "password";
  error?: boolean;
  valid?: boolean;
  errorText?: string;
}

const Field = ({ label, error, errorText, type, valid }: FieldProps) => {
  const _label = label.toLowerCase();
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
      <label className={styles.label} htmlFor={_label}>
        {label}
      </label>
      <div className={inputWrapperClasses}>
        <input className={styles.input} type={getType()} id={_label} name={_label} />
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
