import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageProvider, ThemeProvider } from "./themeContext";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <LanguageProvider>
      <HelmetProvider>
      <App />
      </HelmetProvider>
    </LanguageProvider>
  </ThemeProvider>,
);
