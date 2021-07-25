import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => any;
}

const Button = ({ children, onClick }: ButtonProps): JSX.Element => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div tabIndex={0} onClick={handleClick} className={styles.wrapper}>
      {children}
    </div>
  );
};

export default Button;
