import { useContext } from "react";
import { CardsContext } from "../context/CardsContext";
import { useTimeGame } from "../hooks/useTimeGame";

export const Statistics = () => {
  const { Points, movements } = useContext(CardsContext);

  const { time } = useTimeGame(40);

  return (
    <div className="transparentBg p-2 rounded-lg flex flex-col  sm:flex-row max-w-screen-sm text-center font-bold mt-4 text-xl text-sky-100">
      <p className="m-2 sm:m-0 sm:px-6 ">Points: {Points}</p>
      <p
        className={`m-2 sm:m-0 sm:px-6 ${
          time < 10 ? "vibrate-1 text-red-500" : ""
        }`}
      >
        Time: {time < 10 ? `0${time}` : time} seg
      </p>
      <p className="m-2 sm:m-0 sm:px-6 ">Movements: {movements}</p>
    </div>
  );
};
