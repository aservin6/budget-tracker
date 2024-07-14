import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ExpensesProvider from "./context/expenses-context.tsx";
import { ThemeProvider } from "./context/theme-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ExpensesProvider>
        <App />
      </ExpensesProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
