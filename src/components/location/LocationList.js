import React, { useState, useEffect } from 'react';

import LocationCard from './LocationCard';
import LocationManager from '../../modules/LocationManager'


const LocationList = (props) => {
    const [locations, setLocations] = useState([]);
    const getLocations = () => {
      
        return LocationManager.getAll().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        });
    };
    useEffect(() => {
        getLocations();
    }, []);
    const deleteLocation = (id) => {
        LocationManager.delete(id)
          .then(() => LocationManager.getAll().then(setLocations));
      };
   return (
     <React.Fragment>
       <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {props.history.push("/location/new")}}>
      New Location
  </button>
</section>
    <div className="container-cards">
      {locations.map(location =>
        <LocationCard
        {...props} 
        key={location.id}
        kennelLocation={location}
          deleteLocation={deleteLocation}
          />)}
    </div>
    </React.Fragment>
  );
};
export default LocationList