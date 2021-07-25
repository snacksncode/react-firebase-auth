import React, { FC } from "react";
import styles from "./FullPageCenter.module.scss";

export const FullPageCenter: FC = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
