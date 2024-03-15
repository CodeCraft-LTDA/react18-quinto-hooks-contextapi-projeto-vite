import { useContext } from "react";
import { ThemeContext } from "../App";

export const Button = () => {
    // const context = useContext(ThemeContext);
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div>
            <p>{theme}</p>
            {theme === "light" ? <button onClick={() => setTheme("dark")}>Mudar Tema para dark</button>
            : <button onClick={() => setTheme("light")}>Mudar Tema para light</button>}
            
        </div>
    );
}