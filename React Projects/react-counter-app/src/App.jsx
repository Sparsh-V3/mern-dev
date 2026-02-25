import { useState } from "react"

function Counter(){

  const [counter, setCounter] = useState(0)
  
  const handleCount = (actions) => {
    
    switch (actions) {
      case "increment":
        setCounter(count => count+1)
        break;
      case "decrement":
        setCounter(count => count-1)
        break;
      case "reset":
        setCounter(0)
        break;
      default:
        break;
    }
  }

  return <>
    <h2>Count: {counter}</h2>
    <button onClick={() => handleCount("increment")}>Increment</button>
    <button onClick={() => handleCount("decrement")}>Decrement</button>
    <button onClick={() => handleCount("reset")}>Reset</button>
  </>
}

export default Counter