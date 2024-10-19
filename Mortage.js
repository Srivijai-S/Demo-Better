import { useState } from "react";
import formula from "./asset/formula.jpg";
const Mortage = () => {
  const [Home, setHome] = useState(600000);
  const [Years, setYears] = useState(3);
  const [Interest, setInterest] = useState(8);
  const [result, setResult] = useState(null);

  const calculateMortgage = () => {
    const mortgage = Home + Interest * Years;
    setResult(`Estimated annual mortgage cost: $${mortgage}`);
  };
  return (
    <div>
      <main>
        <h4>Calculate Your Mortgage</h4>
        <label>
          Home Price $
          <input
            type="number"
            value={Home}
            onChange={(e) => setHome(Number(e.target.value))}
          />
        </label>
        <br />
        <label>
          Years-
          <input
            type="number"
            value={Years}
            onChange={(e) => setYears(Number(e.target.value))}
          />
        </label>
        <br />
        <label>
          Interest Rate:%
          <input
            type="text"
            value={Interest}
            onChange={(e) => setInterest(e.target.value)}
          />
        </label>
        <br />
        <button onClick={calculateMortgage}>Calculate</button>
        {result && <p>{result}</p>}
        <img className="demo" src={formula} alt=""></img>
      </main>

      <footer>
        <p className="mp">
          Our mortgage calculator includes key factors like homeowners
          association fees, property taxes, and private mortgage insurance
          (PMI). Get the whole picture and calculate your total monthly payment
        </p>
      </footer>
    </div>
  );
};

export default Mortage;
