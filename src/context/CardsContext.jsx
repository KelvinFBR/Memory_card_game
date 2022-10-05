import { createContext, useState } from "react";

export const CardsContext = createContext();

export const CardsProvider = ({ children }) => {
  const [movements, setMovements] = useState(0);
  const [Points, setPoints] = useState(0);

  return (
    <CardsContext.Provider
      value={{ movements, setMovements, Points, setPoints }}
    >
      {children}
    </CardsContext.Provider>
  );
};
