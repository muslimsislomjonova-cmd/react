import React,{useState} from "react";
import "./App.css"


const App = () => {
  const [ count, setCount] = useState(0); 

  const increment = () => {
    setCount((prev) => prev +1);
  };

 const dircrement = () => {
    setCount((prev) => prev < 1 ? 0 : prev -1);
  };

  return(
    <div>
      <h1>{count}
        <button onClick={increment}>+</button>
            <button onClick={dircrement}>-</button>
      </h1>

      
    
    
    </div>
  )
};
export default App;