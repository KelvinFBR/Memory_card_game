import { useContext } from "react";
import { CardsContext } from "../context/CardsContext";

export const Modal = ({ tilte }) => {
  const { setModalStart, restartGame } = useContext(CardsContext);

  return (
    <div className="absolute flex justify-center items-center top-0 w-screen h-screen animate__animated animate__fadeIn transparentBg">
      <div className="animate__animated animate__flipInX z-10 p-5 font-bold text-center text-sky-100 max-w-lg bg-opacity-90 bg-[#185b9d98] rounded-lg">
        <h1 className="text-2xl ">{tilte}</h1>
        <hr />
        <button
          onClick={() => {
            setModalStart(true);
            restartGame();
          }}
          className="text-md px-4 py-2 mt-6 mx-2 rounded-xl bg-sky-600  hover:bg-sky-700 hover: transition-all"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};
