import "./App.css";
import Job from "./components/Job";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div className="bloc">
      <header className="title">The Job Board</header>
      <Jobs />
      <footer className="end">
        <p>
          Made with <span>React </span> at <span>Le Reacteur </span> by{" "}
          <span>Guillaume</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
