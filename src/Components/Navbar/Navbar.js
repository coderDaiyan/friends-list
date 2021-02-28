import React from "react";
import Salary from "../Salary/Salary";

const Navbar = (props) => {
  const navStyle = {
    color: "white",
  };

  return (
    <div>
      <nav style={navStyle} className="navbar bg-dark fixed-top">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <h2 style={{ color: "white" }}>Friends List</h2>
          </a>
          <div className="d-flex">
            <Salary friends={props.friends}></Salary>
          </div>
          <div className="d-flex">
            <h4>Friends Added: {props.friends.length}</h4>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
