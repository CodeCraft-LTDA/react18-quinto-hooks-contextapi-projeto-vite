import { useId, useRef, useState } from "react";

const App = () => {
  const inputID = useId();

  // const handleClick = () => {
  //   const inputElement: HTMLInputElement | null = document.querySelector("#input");
  //   if (inputElement) {
  //     inputElement.focus();
  //   }

  const inputElement = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    const current = inputElement.current;
    if (!current) {
      return;
    }

    if (inputElement.current) {
      inputElement.current.focus();
    }
  }

  const [time, setTime] = useState(0); //FAZ RE-RENDERIZACAO
  const intervalRef = useRef<number>(); //NAO FAZ RE-RENDERIZACAO

  const handleStart = () => {
    if (intervalRef.current) {
      handleStop();
    }

    const intervalID = setInterval(() => {
      setTime((t: number) => t + 1);
      console.log("intevalo foi executado");
    }, 1000);

    intervalRef.current = intervalID;
  }

  const handleStop = () => {
    clearInterval(intervalRef.current);
  }

  return (
    <>
      <div>
        <label htmlFor={inputID}>Insira algo</label>
        <input type="text" placeholder="Digite alog" id={inputID}/>
      </div>
      <div>
        <input type="text" name="" id="input" ref={inputElement} />
        <button onClick={handleClick}>Focar no input</button>
      </div>

      <div>
        <p>{time}</p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </>
  );
}

export default App;