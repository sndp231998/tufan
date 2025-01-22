import { useContext } from "react";
import { ThemeContext } from "../themeContext";

export default function About() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="border border-red-700">
      <h1 className="text-foreground">About Page</h1>
    </div>
  );
}