import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);

  // const handleBtnClick = (value) => {
  //   setInput(input + value);
  // };

  
  const handleBtnClick = (value) => {
    console.log(value, input)
    if (value === '=') {
      try {
        const calculatedResult = eval(input);
        setResult(calculatedResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };




  const calResult = () => {
    // document.getElementsByClassName("value").style.display = "none";
    try {
      setInput(eval(input).toString());
      // setInput(result)
      setShowResult(true);
    } catch (error) {
      setResult("Error");
      setShowResult(true);
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
    setShowResult(false);
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleClick = (value) => {
    if (value === "00" && input === "") {
      //Prevent adding leading "00"
      return;
    }
    else{
    setInput(input + value);

  };
}

  return (
    <div className="container">

      {/* <div className="input">{showResult ? result : input}</div> */}

      <div className="input">
        <div className="value">{input}</div>
        {/* <div className="result">{result}</div> */}
      </div>


      <div className="calculator">
        <button className="btnOperator" onClick={clearInput}>
          AC
        </button>
        <button className="btnOperator" onClick={handleDelete}>
          DEL
        </button>
        <button
          className="btnOperator"
          onClick={() => {
            handleBtnClick("/");
          }}
        >
          /
        </button>
        <button
          className="btnOperator function"
          onClick={() => {
            handleBtnClick("*");
          }}
        >
          *
        </button>
        <button
          className="number"
          onClick={() => {
            handleBtnClick("7");
          }}
        >
          7
        </button>
        <button
          className="number"
          onClick={() => {
            handleBtnClick("8");
          }}
        >
          8
        </button>
        <button
          className="number"
          onClick={() => {
            handleBtnClick("9");
          }}
        >
          9
        </button>
        <button
          className="btnOperator function"
          onClick={() => {
            handleBtnClick("-");
          }}
        >
          -
        </button>
        <button
          className="number"
          onClick={() => {
            handleBtnClick("4");
          }}
        >
          4
        </button>
        <button
          className="number"
          onClick={() => {
            handleBtnClick("5");
          }}
        >
          5
        </button>
        <button
          className="number"
          onClick={() => {
            handleBtnClick("6");
          }}
        >
          6
        </button>
        <button
          className="btnOperator function"
          onClick={() => {
            handleBtnClick("+");
          }}
        >
          +
        </button>
        <button
          className="number"
          onClick={() => {
            handleBtnClick("1");
          }}
        >
          1
        </button>
        <button
          className="number"
          onClick={() => {
            handleBtnClick("2");
          }}
        >
          2
        </button>
        <button
          className="number"
          onClick={() => {
            handleBtnClick("3");
          }}
        >
          3
        </button>
        <button className="equaloperator" onClick={calResult}>
          =
        </button>
        <button
          className="number"
          onClick={() => {
            handleClick("00");
          }}
        >
          00
        </button>
        <button
          className="number"
          onClick={() => {
            handleBtnClick("0");
          }}
        >
          0
        </button>
        <button
          className="number"
          onClick={() => {
            handleBtnClick(".");
          }}
        >
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
