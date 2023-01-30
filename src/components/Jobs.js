import Job from "./Job";

const Jobs = (props) => {
  console.log(props);
  return (
    <div className="container">
      <div className="job">
        <Job
          className=""
          title="Full Time Sales - Associate-Sydney boutique"
          contracType="CDI"
          country="Australie"
          city="Sydney"
        />
      </div>
      <div className="job">
        <Job
          className=""
          title="Agent de sécurité - Pantin"
          contracType="CDI"
          country="France"
          city="Pantin"
        />
      </div>
      <div className="job">
        <Job
          className=""
          title="Responsable d'Atelier (H/F)"
          contracType="CDD"
          country="France"
          city="Paris"
        />
      </div>
      <div className="job">
        <Job
          className=""
          title="Chef de Projets"
          contracType="CDD"
          country="France"
          city="Paris"
        />
      </div>
      <div className="job">
        <Job
          className=""
          title="Développeur React.js"
          contracType="CDI"
          country="France"
          city="Paris"
        />
      </div>
      <div className="job">
        <Job
          className=""
          title="Sales Associate - Stockholm"
          contracType="CDI"
          country="Suède"
          city="Stockholm"
        />
      </div>
      <div className="job">
        <Job
          className=""
          title="Vendeur/se - Crans-Montana"
          contracType="CDI"
          country="Suisse"
          city="Crans-Montana"
        />
      </div>
      <div className="job">
        <Job
          className=""
          title="CRM & Data Quality Analyst"
          contracType="CDI"
          country="USA"
          city="New-York"
        />
      </div>
      <div className="job">
        <Job
          className=""
          title="Infirmier (H/F)"
          contracType="CDI"
          country="France"
          city="Pantin"
        />
      </div>
    </div>
  );
};

export default Jobs;
