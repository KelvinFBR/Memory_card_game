import { useEffect, useState } from "react";

export const useTimeGame = (initialState) => {
  const [time, setTime] = useState(initialState);

  function myTimer() {
    setTime((time) => time - 1);
  }

  useEffect(() => {
    if (time <= 0) return;
    const myInterval = setInterval(myTimer, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [time]);

  return { time };
};
