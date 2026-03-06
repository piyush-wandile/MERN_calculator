import {useState} from "react";
import axios from "axios";

function App(){
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = async (operator: "+" | "-" | "*" | "/") => {
    const res = await axios.post("http://localhost:5000/api/calculate",
      {
        num1:Number(num1),
        num2:Number(num2),
        operator
      }
  );
    setResult(res.data.result);
};
return (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "10px", textAlign: "center" }}>
      <h1>MERN Calculator</h1>
      <input value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input value={num2} onChange={(e) => setNum2(e.target.value)} />
      <div style={{ marginTop: "10px", display: "flex", gap: "8px", justifyContent: "center" }}>
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>*</button>
        <button onClick={() => calculate("/")}>/</button>
      </div>
      <h2>Result: {result}</h2>
    </div>
  </div>
);
}
export default App;
