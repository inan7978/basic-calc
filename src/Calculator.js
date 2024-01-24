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
      <button
        key={button}
        className="keys"
        onClick={() => btnPressed(button)}
        onKeyDown={() => {
          console.log("Done");
        }}
      >
        {button}
      </button>
    );
  });

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
    if (typeof num === "number") {
      if (decPres) {
        if (value >= 0) {
          setValue(value + num / Math.pow(10, decPlace));
          setDecPlace(decPlace + 1);
        } else {
          console.log("kurec");
          let temp = value;
          temp = temp * -1;
          temp = temp + num / Math.pow(10, decPlace);
          temp = temp * -1;
          setValue(temp);
          setDecPlace(decPlace + 1);
        }
      } else {
        if (value < 0) {
          // aka a negative value
          let temp = value; // -69
          temp = temp * -1; // 69
          temp = temp * 10 + num; // if num is 3 then 693
          temp = temp * -1; // -693
          setValue(temp);
        } else {
          setValue(value * 10 + num);
        }
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
