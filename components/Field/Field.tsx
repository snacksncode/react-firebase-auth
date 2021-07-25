import React from "react";
import styles from "./Field.module.scss";

interface FieldProps {
  label: string;
}

const Field = ({ label }: FieldProps) => {
  return <p>Field {label} here</p>;
};

export default Field;
