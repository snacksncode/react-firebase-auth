import React, { useState } from "react";

type StringMap = { [key: string]: string };

const useFormValidation = (initialState: StringMap) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
      };
    });
  };

  return {
    values,
    handleChange,
  };
};

export default useFormValidation;
