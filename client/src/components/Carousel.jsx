import React from "react";

const Carousel = () => {
  return (
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="w-100"
          alt="..."
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="img-fluid w-100"
          alt="..."
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="img-fluid"
          alt="..."
        />
      </div>
    </div>
  );
};

export default Carousel;
