import React, { FC } from "react";
import styles from "./FullPageCenter.module.scss";

const FullPageCenter: FC = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default FullPageCenter;
