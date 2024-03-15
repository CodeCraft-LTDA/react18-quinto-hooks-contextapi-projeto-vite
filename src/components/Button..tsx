import { useContext } from "react";
import { ThemeContext } from "../App";

export const Button = () => {
    const theme = useContext(ThemeContext);

    return (
        <div>
            <p>{theme}</p>
            <button>Click me</button>
        </div>
    );
}