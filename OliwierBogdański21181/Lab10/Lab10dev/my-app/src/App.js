import React from "react";
import "./App.css";
import ClickCounter from "./ClickCounter";
import PrimeCalculator from "./PrimeCalculator";
import FormReducer from "./FormReducer";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeProvider } from "./ThemeContext";
import LayoutEffectExample from "./LayoutEffectExample";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Ćwiczenie 1 </h2>
        <ClickCounter />

        <h2>Ćwiczenie 2 </h2>
        <PrimeCalculator />

        <h2>Ćwiczenie 3  </h2>
        <FormReducer />

        <h2>Ćwiczenie 4 </h2>
        <ThemeProvider>
          <ThemeSwitcher />
        </ThemeProvider>
      </header>

      <h2> Ćwiczenie 5</h2>
      <LayoutEffectExample/>
    </div>
  );
}

export default App;
