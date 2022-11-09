import { createContext, useState, useContext } from "react";

const DarkModeContext = createContext();

const ContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const data = { mode, setMode };
  return (
    <DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>
  );
};

export const useMode = () => useContext(DarkModeContext);

export default ContextProvider;
