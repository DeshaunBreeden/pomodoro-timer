import React, { createContext, useState } from "react";
import { stages } from "../constants/constants";

export const FormDataContext = createContext();

const FormDataProvider = ({ children }) => {
  const initialFormData = {
    PomodoroTime: stages.PomodoroTime / 60,
    shortBreakTime: stages.shortBreakTime / 60,
    longBreakTime: stages.longBreakTime / 60,
  };

  const [formData, setFormData] = useState(initialFormData);

  const contextValue = {
    formData,
    setFormData,
  };

  return (
    <FormDataContext.Provider value={contextValue}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataProvider;