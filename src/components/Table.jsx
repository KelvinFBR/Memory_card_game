import { Card } from "./Card";
import { dataCards } from "../../data/DataCards";
import { shuffleCards, cardMatch } from "../helpers/";
import { useContext, useMemo } from "react";
import { CardsContext } from "../context/CardsContext";

export const Table = () => {
  const suffleCards = useMemo(() => shuffleCards(dataCards), []);
  const { setPoints, setMovements } = useContext(CardsContext);
  const { onSelectCard } = cardMatch({ setPoints, setMovements });

  return (
    <div className="transparentBg text-white p-5 max-w-screen-sm  rounded-xl">
      <h1 className="text-center font-bold text-2xl mb-10">Memory Game</h1>
      <div className="grid grid-cols-4 gap-4 ">
        {suffleCards.map((card) => (
          <Card
            key={card.id}
            onSelectCard={onSelectCard}
            idCard={card.id}
            numCard={card.numImg}
          />
        ))}
      </div>
    </div>
  );
};
