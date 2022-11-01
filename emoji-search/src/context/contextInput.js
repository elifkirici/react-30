import { createContext, useState, useContext } from "react";

const contextInput = createContext();

const Provider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");

  const data = {
    inputValue,
    setInputValue,
  };
  return <contextInput.Provider value={data}>{children}</contextInput.Provider>;
};
export const UseList = () => useContext(contextInput);
export default Provider;
