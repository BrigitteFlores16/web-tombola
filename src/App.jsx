import { useState } from "react";

const App = () => {
  const [Numbers, setNumbers] = useState(
    Array.from({ length: 90 }, (_, i) => i + 1)
  );
  const [drawnNumbers, setDrawnNumbers] = useState([]);
  const [lastNumber, setLastNumber] = useState(null);

  const drawNumber = () => {
    if (Numbers.length === 0) return;
    const randomIndex = Math.floor(Math.random() * Numbers.length);
    const drawnNumber = Numbers.splice(randomIndex, 1)[0];
    setNumbers([...Numbers]);
    setDrawnNumbers([...drawnNumbers, drawnNumber]);
    setLastNumber(drawnNumber);
  };

  return (
    <div className="container text-center">
      <header className="my-3">
        <h1>Tombola</h1>
      </header>
      <main className="row justify-content-center">
        <div className="col-md-8">
          <div className="board d-flex flex-wrap justify-content-center">
            {Array.from({ length: 90 }, (_, i) => i + 1).map((num) => (
              <div
                key={num}
                className={`number ${drawnNumbers.includes(num) ? "red" : ""}`}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-4">
          <div className="last-number my-4">
            <h5>Ultimo numero estratto</h5>
            <div className="display-4 bg-white p-3 mx-auto">
              {lastNumber !== null ? lastNumber : "-"}
            </div>
          </div>
          <hr />
          <div className="controls my-4 d-flex flex-column align-items-center">
            <button
              className="mb-2 btn btn-warning d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2"
              onClick={drawNumber}
            >
              Estrai
            </button>
            <button
              className="btn btn-danger "
              onClick={() => window.location.reload()}
            >
              Termina Gioco
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
