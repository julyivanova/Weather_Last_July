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
          <a
            href="https://www.shecodes.io/graduates/52089-july-ivanova"
            target="_blank"
          >
            July
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/julyivanova/Weather_Last_July"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
