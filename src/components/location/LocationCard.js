import React from "react";
import {Link} from "react-router-dom"

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-locationname">
          {props.location.name}
        </span></h3>
        <p>Address: {props.location.address}</p>
        <Link to={`/location/${props.location.id}`}>
          <button>Details</button>
        </Link>
        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close</button>
      </div>
    </div>
  );
}
export default LocationCard