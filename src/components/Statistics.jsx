import { useContext } from "react";
import { CardsContext } from "../context/CardsContext";
import { Modal } from "./Modal";
import { ModalInit } from "./ModalInit";

export const Statistics = () => {
  const {
    time,
    stopTimer,
    resumeTimer,
    Points,
    movements,
    modalStart,
    TimeInit,
  } = useContext(CardsContext);

  return (
    <>
      <div className="transparentBg p-2 rounded-lg flex flex-col sm:flex-row max-w-screen-sm text-center font-bold mt-4 text-xl text-sky-100">
        <p className="m-2 sm:m-0 sm:px-6 ">Points: {Points}</p>
        <p
          className={`m-2 sm:m-0 sm:px-6 ${
            time < 10 && !modalStart ? "vibrate-1 text-red-500" : ""
          }`}
        >
          Time: {time < 10 ? `0${time}` : time} seg
        </p>
        <p className="m-2 sm:m-0 sm:px-6 ">Movements: {movements}</p>
      </div>

      {time === 0 && !modalStart && (
        <>
          <Modal tilte="You Lose" />
        </>
      )}

      {Points === 8 && !modalStart && (
        <>
          <Modal tilte="You Win" />
          {/* Detener el tiempo */}
          {stopTimer()}
        </>
      )}

      {modalStart && (
        <>
          <ModalInit
            tilte="Welcome"
            description="Select a time and Play Game:"
          />
        </>
      )}
    </>
  );
};
