export const Statistics = ({ points, time, movements }) => {
  return (
    <div className="transparentBg p-2 rounded-lg flex flex-col  sm:flex-row max-w-screen-sm text-center font-bold mt-4 text-xl text-sky-100">
      <p className="m-2 sm:m-0 sm:px-6 ">Points: {points}</p>
      <p className="m-2 sm:m-0 sm:px-6 ">Time: {time} seg</p>
      <p className="m-2 sm:m-0 sm:px-6 ">Movements: {movements}</p>
    </div>
  );
};
