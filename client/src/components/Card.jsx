import { FaUserAlt } from "react-icons/fa";

const Card = ({ name, occupation }) => {
  return (
    <div className="card bg-primary mb-5 cardTitle">
      <div className="card-body d-flex">
        <span style={{ fontSize: "3rem", color: "white", marginRight:"30px" }}>
          <FaUserAlt />
        </span>
        <div className="d-flex flex-column">
          <h2 style={{color:"#fff"}}>Name: {name}</h2>
          <h4>Occupation: {occupation}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
