import "./Calculator.css";
import { useState } from "react";

function Calculator() {
  const [value, setValue] = useState(0);
  const [operator, setOperator] = useState("");
  const [decPres, setDecPres] = useState(false);
  const [decPlace, setDecPlace] = useState(1);
  const [prev, setPrev] = useState(0);

  const buttons = [
    "+",
    "-",
    "*",
    "/",
    7,
    8,
    9,
    4,
    5,
    6,
    1,
    2,
    3,
    "Neg",
    0,
    ".",
  ];

  const mappedBtns = buttons.map((button) => {
    return (
      <button className="keys" onClick={() => btnPressed(button)}>
        {button}
      </button>
    );
  });

  function finalRound(val) {
    // have final sum go through this to round it off a bit.
  }

  function submitHandler() {
    const operand1 = prev;
    const operand2 = value;

    switch (operator) {
      case "+":
        setValue(operand1 + operand2);
        setPrev(0);
        setOperator("");
        break;
      case "-":
        setValue(operand1 - operand2);
        setPrev(0);
        setOperator("");
        break;
      case "*":
        setValue(operand1 * operand2);
        setPrev(0);
        setOperator("");
        break;
      case "/":
        setValue(operand1 / operand2);
        setPrev(0);
        setOperator("");
        break;
      default:
        break;
    }
  }

  function btnPressed(num) {
    // typeof(num) === 'number' && (decPres ? setValue(value + (num/(Math.pow(10, decPlace)))) : setValue(value*10 + num));

    if (typeof num === "number") {
      if (decPres) {
        setValue(value + num / Math.pow(10, decPlace));
        setDecPlace(decPlace + 1);
      } else {
        setValue(value * 10 + num);
      }
    }
    if (typeof num === "string") {
      switch (num) {
        case "+":
          setOperator("+");
          setDecPres(false);
          setDecPlace(1);
          setPrev(value);
          setValue(0);
          break;
        case "-":
          setOperator("-");
          setDecPres(false);
          setDecPlace(1);
          setPrev(value);
          setValue(0);
          break;
        case "*":
          setOperator("*");
          setDecPres(false);
          setDecPlace(1);
          setPrev(value);
          setValue(0);
          break;
        case "/":
          setOperator("/");
          setDecPres(false);
          setDecPlace(1);
          setPrev(value);
          setValue(0);
          break;
        case "Neg":
          setValue(value * -1);
          break;
        case ".":
          setDecPres(true);
      }
    }
  }
  return (
    <div>
      <div className="container">
        <div className="screen">
          <h5 className="prev-val">
            {prev}
            {operator}
          </h5>
          <h2 className="value">{value}</h2>
        </div>
        <div className="keys-container">
          {mappedBtns}
          <button
            className="keys all-clear"
            onClick={() => {
              setOperator("");
              setValue(0);
              setDecPres(false);
              setDecPlace(1);
              setPrev(0);
            }}
          >
            AC
          </button>
          <button className="keys equal-sign" onClick={submitHandler}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
