import { useId, useRef } from "react";

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
    </>
  );
}

export default App;