import React from "react";

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-ownername">
          {props.owner.name}
        </span></h3>
        <p>Pet: {props.owner.pet}</p>
      </div>
    </div>
  );
}

    export default OwnerCard