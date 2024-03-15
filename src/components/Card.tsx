import { useContext } from "react";
import { ThemeContext } from "../App";

export const Card = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div style={{backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#333" : "#fff"}}>
            <h1>Card</h1>
        </div>
    );
}