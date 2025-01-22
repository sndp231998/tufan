import { useContext } from "react";
import { ThemeContext } from "../themeContext";

export default function Blog(){
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="border border-red-700">
      <h1>Blog Page</h1>
    </div>
  );
}