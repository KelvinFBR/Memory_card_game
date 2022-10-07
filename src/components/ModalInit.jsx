import { useContext } from "react";
import { CardsContext } from "../context/CardsContext";

export const ModalInit = ({ tilte, description }) => {
  const { time, TimeInit, setModalStart, resumeTimer } =
    useContext(CardsContext);

  // ! Crear una funcion que reinicie el juego
  return (
    <div className="absolute flex justify-center items-center top-0 w-screen h-screen animate__animated animate__fadeIn transparentBg">
      <div className="animate__animated animate__flipInX z-10 p-5 font-bold text-center text-sky-100 max-w-lg bg-opacity-90 bg-[#185b9d98] rounded-lg">
        <h1 className="text-2xl">{tilte}</h1>
        <hr />
        <p className="my-8 text-lg">{description}</p>
        <button
          onClick={() => {
            TimeInit(40);
            setModalStart(false);
            resumeTimer();
          }}
          className="text-md  px-4 py-2 mx-2 rounded-xl bg-sky-600  hover:bg-sky-700 hover: transition-all"
        >
          40 Seg
        </button>
        <button
          onClick={() => {
            TimeInit(60);
            setModalStart(false);
            resumeTimer();
          }}
          className="text-md px-4 py-2 mx-2 rounded-xl bg-sky-600  hover:bg-sky-700  hover: transition-all"
        >
          1 Min
        </button>
        <button
          onClick={() => {
            TimeInit(120);
            setModalStart(false);
            resumeTimer();
          }}
          className="text-md  px-4 py-2 mx-2 rounded-xl bg-sky-600  hover:bg-sky-700 hover: transition-all"
        >
          2 Min
        </button>
      </div>
    </div>
  );
};
