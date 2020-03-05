import React from "react";


const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-empname">
          {props.employee.name}
        </span></h3>
        <p>Title: {props.employee.title}</p>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fire</button>
        <button type="button" onClick={()=> props.history.push(`/employee/${props.employee.id}/edit`)}>Edit</button>
        <button type="button"
        onClick={() => { props.history.push(`/employees/${props.employee.id}/details`) }}>Details</button>
      </div>
    </div>
  );
}
export default EmployeeCard