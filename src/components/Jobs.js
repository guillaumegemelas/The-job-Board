import Job from "./Job";

const Jobs = (props) => {
  console.log(props);
  return (
    <div className="container">
      <div className="job">
        <Job
          className="Full Time Sales"
          title="Associate-Sydney boutique"
          contracType="CDI"
          country="Australie"
          city="Sydney"
        />
      </div>
      <div className="job">
        <Job
          className="Agent de sécurité"
          title="Pantin"
          contracType="CDI"
          country="France"
          city="Pantin"
        />
      </div>
      <div className="job">
        <Job
          className="Responsable d'Atelier (H/F)"
          title=""
          contracType="CDD"
          country="France"
          city="Paris"
        />
      </div>
      <div className="job">
        <Job
          className="Chef de Projets"
          title=""
          contracType="CDD"
          country="France"
          city="Paris"
        />
      </div>
      <div className="job">
        <Job
          className="Développeur React.js"
          title=""
          contracType="CDI"
          country="France"
          city="Paris"
        />
      </div>
      <div className="job">
        <Job
          className="Sales Associate"
          title="Stockholm"
          contracType="CDI"
          country="Suède"
          city="Stockholm"
        />
      </div>
      <div className="job">
        <Job
          className="Vendeur/se - Crans"
          title="Montana"
          contracType="CDI"
          country="Suisse"
          city="Crans-Montana"
        />
      </div>
      <div className="job">
        <Job
          className="CRM & Data Quality"
          title="Analyst"
          contracType="CDI"
          country="USA"
          city="New-York"
        />
      </div>
      <div className="job">
        <Job
          className="Infirmier (H/F)"
          title=""
          contracType="CDI"
          country="France"
          city="Pantin"
        />
      </div>
    </div>
  );
};

export default Jobs;
