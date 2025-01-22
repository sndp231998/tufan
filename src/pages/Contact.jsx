import { ThemeContext} from "../themeContext";
import { useContext } from "react";

export default function Contact(){
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
      <div className="h-screen bg-white dark:bg-blue-700">
        <h1 className="text-2xl text-black dark:text-white">
          About page: Current Theme: {theme}
        </h1>
      </div>
    );
}