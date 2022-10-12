const Card = ({ name, occupation }) => {
  return (
    <div className="card bg-primary mb-5">
      <div className="card-body">
        <h5>{name}</h5>
        <p>{occupation}</p>
      </div>
    </div>
  );
};

export default Card;
