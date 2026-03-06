import {useState} from "react";
import axios from "axios";

function App(){
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = async (operator: "+" | "-" | "*" | "/") => {
    if (!num1 || !num2) {
      setResult("Error: Please enter both numbers");
      return;
    }

    const n1 = Number(num1);
    const n2 = Number(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Error: Please enter valid numbers");
      return;
    }

    try {
      const res = await axios.post("https://mern-calculator-i2fm.onrender.com/api/calculate",
        {
          num1: n1,
          num2: n2,
          operation: operator
        }
      );
      setResult(res.data.result);
    } catch (error: any) {
      setResult("Error: " + (error.response?.data?.error || "Server error"));
    }
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
