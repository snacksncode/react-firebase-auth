import classNames from "classnames";
import React, { useRef } from "react";
import useKeyClick from "../../hooks/useKeyClick";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: () => any;
  loading?: boolean;
  role?: string;
  text: string;
}

const Button = ({ onClick, loading, text, role }: ButtonProps): JSX.Element => {
  const buttonClasses = classNames(styles.wrapper, {
    [styles["wrapper--loading"]]: loading,
  });
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button tabIndex={0} role={role || "button"} onClick={handleClick} className={buttonClasses}>
      <span className={styles.text}>{text}</span>
      {loading && (
        <div className={styles.loader}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              stroke="currentColor"
              strokeWidth="10"
              r="35"
              strokeDasharray="164.93361431346415 56.97787143782138"
              data-darkreader-inline-fill=""
              data-darkreader-inline-stroke=""
              transform="matrix(1,0,0,1,0,0)"
            ></circle>
          </svg>
        </div>
      )}
    </button>
  );
};

export default Button;
