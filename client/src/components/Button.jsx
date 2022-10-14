import React from "react";

function Button({ word, classN, typeofbtn, onClick }) {
  return (
    <button onClick={onClick} type={typeofbtn} className={classN}>
      {word}
    </button>
  );
}

export default Button;
