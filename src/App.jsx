import { useState } from "react";

const App = () => {
  const [Numbers, setNumbers] = useState();

  return (
    <div className="container text-center">
      <header className="my-3">
        <h1>Tombola</h1>
      </header>
    </div>
  );
};

export default App;
