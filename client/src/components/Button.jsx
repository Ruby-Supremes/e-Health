import React from "react";

function Button({ word, classN, typeofbtn }) {
  return (
    <button type={typeofbtn} className={classN}>
      {word}
    </button>
  );
}

export default Button;
