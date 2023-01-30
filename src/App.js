import "./App.css";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div className="bloc">
      <header className="title">The Job Board</header>
      <div className="container">
        <div class="item">
          <Jobs
            className="Full Time Sales"
            title="Associate-Sydney boutique"
            contracType="CDI"
            country="Australie"
            city="Sydney"
          ></Jobs>
        </div>
        <div class="item">
          <Jobs
            className="Agent de sécurité"
            title="Pantin"
            contracType="CDI"
            country="France"
            city="Pantin"
          ></Jobs>
        </div>
        <div class="item">
          <Jobs
            className="Responsable d'Atelier (H/F)"
            title=""
            contracType="CDD"
            country="France"
            city="Paris"
          ></Jobs>
        </div>
        <div class="item">
          <Jobs
            className="Chef de Projets"
            title=""
            contracType="CDD"
            country="France"
            city="Paris"
          ></Jobs>
        </div>
        <div class="item">
          <Jobs
            className="Développeur React.js"
            title=""
            contracType="CDI"
            country="France"
            city="Paris"
          ></Jobs>
        </div>
        <div class="item">
          <Jobs
            className="Sales Associate"
            title="Stockholm"
            contracType="CDI"
            country="Suède"
            city="Stockholm"
          ></Jobs>
        </div>
        <div class="item">
          <Jobs
            className="Vendeur/se - Crans"
            title="Montana"
            contracType="CDI"
            country="Suisse"
            city="Crans-Montana"
          ></Jobs>
        </div>
        <div class="item">
          <Jobs
            className="CRM & Data Quality"
            title="Analyst"
            contracType="CDI"
            country="USA"
            city="New-York"
          ></Jobs>
        </div>
        <div class="item">
          <Jobs
            className="Infirmier (H/F)"
            title=""
            contracType="CDI"
            country="France"
            city="Pantin"
          ></Jobs>
        </div>
      </div>
      <footer className="end">
        <p>Made with React at Le Reacteur by Guillaume</p>
      </footer>
    </div>
  );
}

export default App;
