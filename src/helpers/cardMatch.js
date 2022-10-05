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

let arrIdCard = [];
let arrSetFlipCard = [];
const counterMatchCard = [];

//* setPoints, setMovements modificadores del estado del CardContext
//  setPoints: modifica los puntos
//  setMovementsL modifica los movimientos

export const cardMatch = ({ setPoints, setMovements }) => {
  const winGame = (counterMatch) => {
    if (counterMatch === 8) {
      console.log("Win");
    }
  };

  const getPoints = (counterMatch) => {
    setPoints(counterMatch);
  };

  const onSelectCard = ({ idCard, isFlip, setIsFlip }) => {
    if (isFlip) return;
    setIsFlip(true);

    const arrSetFlip = arrSetFlipCard.unshift(setIsFlip);
    const arrIds = arrIdCard.unshift(idCard);

    if (arrIds === 2 && arrSetFlip === 2) {
      validMatchCardsSelect(arrIdCard, arrSetFlipCard);

      //* Aumentar los movimientos
      setMovements((movement) => movement + 1);
    }
  };

  const validMatchCardsSelect = (arrId, arrSetFlip) => {
    let matchCard = false;

    const cardMatchValid = possibleMatch.filter((ids) => {
      if (arrId.includes(ids[0]) && arrId.includes(ids[1])) {
        //* almacenar los match para saber si gano y los punto que tiene
        counterMatchCard.unshift(arrId);

        return arrId;
      }
    });

    if (cardMatchValid.length > 0) {
      matchCard = true;
    } else {
      matchCard = false;
    }

    if (!matchCard) {
      setTimeout(() => {
        arrSetFlip.forEach((setFlip) => {
          setFlip(false);
        });
      }, 800);
    }

    arrIdCard = [];
    arrSetFlipCard = [];
    winGame(counterMatchCard.length);
    getPoints(counterMatchCard.length);
  };

  return { onSelectCard };
};
