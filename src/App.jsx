import { Statistics } from "./components/Statistics";
import { Table } from "./components/Table";

function App() {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <Table />
      <Statistics />
    </section>
  );
}

export default App;
