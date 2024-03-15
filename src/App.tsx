import { useId } from "react";

const App = () => {
  const inputID = useId();

  return (
    <div>
      <label htmlFor={inputID}>Insira algo</label>
      <input type="text" placeholder="Digite alog" id={inputID}/>
    </div>
  );
}

export default App;