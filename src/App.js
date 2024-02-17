import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";

const App = () => {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };

  const clickHandler2 =(event) => {
    var res = (-1 * eval(result)).toString();
    setResult(res); 
  };

  const clearDisplay = () => {
    setResult("");
  };
  const Calculate = () => {
    let finalResult = transformExpression();
    let res = eval(finalResult).toString()
    setResult(res);
  };
  const transformExpression = () => {
    let tmp = result.replace("÷", "/").replace("x", "*");
    return tmp.toString();
  };
  return (
    <div className="calculator">
      <input type="text" placeholder="0" id="answer" value={result} />
      <Button value="C" class="button" clickHandler={clearDisplay}/>
      <Button value="+/-" class="button" clickHandler={clickHandler2}/>
      <Button value="%" class="button" clickHandler={clickHandler}/>
      <Button value="÷" class="button button2" clickHandler={clickHandler}/>
      <Button value="7" class="button" clickHandler={clickHandler}/>
      <Button value="8" class="button" clickHandler={clickHandler}/>
      <Button value="9" class="button" clickHandler={clickHandler}/>
      <Button value="x" class="button button2" clickHandler={clickHandler}/>
      <Button value="4" class="button" clickHandler={clickHandler}/>
      <Button value="5" class="button" clickHandler={clickHandler}/>
      <Button value="6" class="button" clickHandler={clickHandler}/>
      <Button value="-" class="button button2" clickHandler={clickHandler}/>
      <Button value="1" class="button" clickHandler={clickHandler}/>
      <Button value="2" class="button" clickHandler={clickHandler}/>
      <Button value="3" class="button" clickHandler={clickHandler}/>
      <Button value="+" class="button button2" clickHandler={clickHandler}/>
      <Button value="0" class="button button1" clickHandler={clickHandler}/>
      <Button value="." class="button" clickHandler={clickHandler}/>
      <Button value="=" class="button button2" clickHandler={Calculate}/>
    </div>
  );
};

export default App;
