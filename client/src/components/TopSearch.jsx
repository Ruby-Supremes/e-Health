import React from "react";
import Button from "./Button";

const TopSearch = ({column}) => {
  return (
    <div className={`${column} border1`}>
      <div className="topNavbar d-flex justify-content-around">
        <form className="align-self-center searchInput" action>
          <input type="search" placeholder="Search Patients" />
        </form>
        <Button text="Logout" column="align-self-center" />
      </div>
    </div>
  );
};
export default TopSearch;
