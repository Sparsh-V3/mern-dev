import { useEffect, useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [memoryValue, setMemoryValue] = useState("")

  function handleKeyPressed(value) {
    setDisplayValue(prev => prev + value)
  }

  return (
    <div id="calculator">
      <Display value={displayValue} />
      <Keypad onKeyPressed={handleKeyPressed} />
    </div>
  );
};

export default Calculator;
