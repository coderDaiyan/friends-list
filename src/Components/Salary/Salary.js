import React from "react";

const Salary = (props) => {
  const friends = props.friends;
  let totalSalary = 0;
  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    totalSalary += friend.salary;
  }
  return (
    <>
      <h4>Salary: {totalSalary}</h4>
    </>
  );
};

export default Salary;
