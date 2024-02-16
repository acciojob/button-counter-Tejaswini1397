
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [clickCount,setClickCount]=useState(0);
  const handleButtonClick=()=>{
    setClickCount(clickCount+1);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {clickCount} times</p>
        <button onClick={handleButtonClick}>Click me</button>

    </div>
  )
}

export default App
