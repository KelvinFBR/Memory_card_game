import { useState } from "react";

const possibleMatch = [
  [1, 9],
  [2, 10],
  [3, 11],
  [4, 12],
  [5, 13],
  [6, 14],
  [7, 15],
  [8, 16],
];

export const useCardMatch = ({ counter, setCounter }) => {
  const [isMatchCard, setIsMatchCard] = useState(false);
  const [isSelectCounter, setIsSelectCounter] = useState(1);
  const [isMatchArr, setIsMatchArr] = useState([]);

  const addIdCard = (idCard) => {
    if (isMatchArr.includes(idCard)) return;
    setIsMatchArr([...isMatchArr, idCard]);
  };

  const onSelectCard = ({ idCard, isFlip, setIsFlip }) => {
    addIdCard(idCard);
    setIsFlip(true);
  };

  const matchCardsSelect = () => {
    const cardMatchValid = possibleMatch.map((ids) => {
      if (isMatchArr.includes(ids[0]) && isMatchArr.includes(ids[1])) {
        return true;
      }
      return false;
    });

    if (cardMatchValid.includes(true)) {
      setIsMatchCard(true);
    } else {
      setIsMatchCard(false);
    }

    setIsMatchArr([]);
  };

  if (isMatchArr.length === 2) {
    matchCardsSelect();
  }

  return { onSelectCard };
};
