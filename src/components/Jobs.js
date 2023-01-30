const Jobs = (props) => {
  console.log(props);
  return (
    <div className="boxs">
      <div className="headBox">
        <p>{props.className}</p>
        <p>{props.title}</p>
      </div>
      <div className="endBox">
        <p>{props.contracType}</p>
        <p>{props.country}</p>
        <p>{props.city}</p>
      </div>
    </div>
  );
};

export default Jobs;
