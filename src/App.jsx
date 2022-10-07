import { Statistics } from "./components/Statistics";
import { Table } from "./components/Table";
import { CardsProvider } from "./context/CardsContext";

function App() {
  return (
    <CardsProvider>
      <section className="relative h-screen flex flex-col justify-center items-center">
        <Table />
        <Statistics />
      </section>
    </CardsProvider>
  );
}

export default App;
