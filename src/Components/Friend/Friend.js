import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./friend.css";

const Friend = (props) => {
  const { name, email, phone, company, img, salary } = props.friend;

  return (
    <div className="friend-div">
      <img src={img} alt="" />
      <h2>Name: {name}</h2>
      <h4>Email: {email}</h4>
      <h4>Phone: {phone}</h4>
      <h4>Company: {company.name}</h4>
      <h4>Designation: {company.designation}</h4>
      <h4 className="mb-3">Salary: {salary}</h4>
      <button
        onClick={() => {
          props.handleAddFriends(props.friend);
        }}
        className="btn btn-danger"
      >
        <FontAwesomeIcon icon={faPlus} className="me-2">
          {" "}
        </FontAwesomeIcon>
        Follow Me
      </button>
    </div>
  );
};

export default Friend;
