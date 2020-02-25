import React from "react";

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-ownername">
          {props.owner.name}
        </span></h3>
        <p>Pet: {props.owner.pet}</p>
        <button type="button" onClick={()=> props.deleteOwner(props.owner.id)}>Remove</button>
      </div>
    </div>
  );
}

    export default OwnerCard