import { Statistics } from "./components/Statistics";
import { Table } from "./components/Table";
import { CardsProvider } from "./context/CardsContext";

function App() {
  return (
    <CardsProvider>
      <section className="h-screen flex flex-col justify-center items-center">
        <Table />
        <Statistics points={2} time={"40"} movements={5} />
      </section>
    </CardsProvider>
  );
}

export default App;
