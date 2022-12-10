import react from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer>
          This project was coded by{" "}
          <a href="https://shecodes.com/" target="_blank">
            July
          </a>{" "}
          and is{" "}
          <a href="https://github.com/" target="_blank">
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
