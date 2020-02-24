import React from "react";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-empname">
          {props.employee.name}
        </span></h3>
        <p>Title: {props.employee.title}</p>
      </div>
    </div>
  );
}
export default EmployeeCard