export const Card = ({ numCard }) => {
  return (
    <div className="flex justify-center p-2 w-[100px] bg-sky-100 rounded-lg">
      <img src={`/assets/${numCard}.png`} alt="card" className="w-[80%] " />
    </div>
  );
};
