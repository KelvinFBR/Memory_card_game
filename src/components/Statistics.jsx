import { useContext, useEffect } from "react";
import { CardsContext } from "../context/CardsContext";
import { Modal } from "./Modal";
import { ModalInit } from "./ModalInit";

const timeAudio = new Audio("./sounds/time.wav");
const winAudio = new Audio("./sounds/win.wav");
const loseAudio = new Audio("./sounds/lose.wav");

export const Statistics = () => {
  const { time, stopTimer, Points, movements, modalStart } =
    useContext(CardsContext);

  useEffect(() => {
    if (Points === 8 && !modalStart) {
      stopTimer();
    }

    if (time === 9 && !modalStart) {
      timeAudio.play();
    }

    if (Points === 8 && !modalStart) {
      winAudio.play();
    }

    if (time === 0 && !modalStart) {
      loseAudio.play();
    }
  }, [Points, time]);

  return (
    <>
      <div className="transparentBg p-2 rounded-lg flex flex-col sm:flex-row max-w-screen-sm text-center font-bold mt-4 text-xl text-sky-100">
        <p className="m-2 sm:m-0 sm:px-6 ">Points: {Points}</p>
        <p
          className={`m-2 sm:m-0 sm:px-6  ${
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

      {modalStart && (
        <>
          <ModalInit
            tilte="Welcome"
            description="Select a time and Play Game:"
          />
        </>
      )}

      {Points === 8 && !modalStart && (
        <>
          <Modal tilte="You Win" />
          {/* Detener el tiempo */}
        </>
      )}
    </>
  );
};
