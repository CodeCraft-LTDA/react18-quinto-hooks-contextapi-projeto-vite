import { useId, useReducer, useRef, useState } from "react";

type TasksState = string[];
type TasksAction = {
  type: "add" | "remove";
  payload: string;
}

const reducer = (state: TasksState, action: TasksAction): TasksState => {
  if (action.type === "add" && action.payload != "") {
    return [...state, action.payload];
  }

  return state;
}

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

  const [tasks, dispatch] = useReducer(reducer, []);
  const [inputValue, setInputValue] = useState("");

  const handleClickUseReducer = () => {
    dispatch({ type: "add", payload: inputValue });
    setInputValue("");
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

      <div>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
        <button onClick={handleClickUseReducer}>
          Nova Tarefa
        </button>

        <ul>
          {tasks.map((task, key) => (
            <li key={key}>{task}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;