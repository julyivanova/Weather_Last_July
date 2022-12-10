import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Weather defaultCity="Kyiv" />
          </div>
        </div>
        <footer className="text-center">
          <a
            href="https://github.com/julyivanova/React-Julia"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            Open-source code
          </a>
          <br />
          by July
        </footer>
      </div>
    </div>
  );
}

export default App;
