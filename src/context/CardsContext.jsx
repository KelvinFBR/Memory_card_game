import { createContext, useState } from "react";
import { useTimeGame } from "../hooks/useTimeGame";
export const CardsContext = createContext();

let flipCards = [];

export const CardsProvider = ({ children }) => {
  const [movements, setMovements] = useState(0);
  const [Points, setPoints] = useState(0);
  const [modalStart, setModalStart] = useState(true);
  const { time, stopTimer, resumeTimer, setTime } = useTimeGame(0);

  const TimeInit = (initial) => {
    setTime(initial);
  };

  const restartGame = () => {
    flipCards.forEach((fns) => {
      fns[0](false);
      fns[1](false);
    });

    flipCards = [];
  };

  return (
    <CardsContext.Provider
      value={{
        time,
        stopTimer,
        resumeTimer,
        TimeInit,
        movements,
        modalStart,
        setModalStart,
        setMovements,
        Points,
        setPoints,
        flipCards,
        restartGame,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
