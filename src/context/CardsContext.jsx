import { createContext, useState } from "react";

export const CardsContext = createContext();

export const CardsProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <CardsContext.Provider value={{ counter, setCounter }}>
      {children}
    </CardsContext.Provider>
  );
};
