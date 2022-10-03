import { dataCards } from "../../data/DataCards";
import { shuffleCards } from "../helpers/shuffleCards";
import { Card } from "./Card";

export const Table = () => {
  const suffleCards = shuffleCards(dataCards);

  return (
    <div className="transparentBg text-white p-5 max-w-screen-sm  rounded-xl">
      <h1 className="text-center font-bold text-2xl mb-10">Memory Game</h1>
      <div className="grid grid-cols-4 gap-4 ">
        {suffleCards.map((card) => (
          <Card key={card.id} numCard={card.numImg} />
        ))}
      </div>
    </div>
  );
};
