import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList"
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail"
import LocationDetail from "./location/LocationDetail"
import AnimalForm from './animal/AnimalForm'
import LocationForm from './location/LocationForm'
import OwnerForm from './owner/OwnerForm'
import EmployeeForm from './employee/EmployeeForm'
import AnimalEditForm from './animal/AnimalEditForm'
import Login from './auth/Login'

const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route path="/login" component={Login} />
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home />;
        }}
      />
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
  if (isAuthenticated()) {
    return <AnimalEditForm {...props} />
  }
}} />
     <Route exact path="/animals" render={props => {
  if (isAuthenticated()) {
    return <AnimalList {...props} />
  } else {
    return <Redirect to="/login" />
  }
}} />
      <Route
        exact path="/animals/:animalId(\d+)"
        render={props => {
          return (
            <AnimalDetail
              animalId={parseInt(props.match.params.animalId)}
              {...props}
            />
          );
        }}
      />
      <Route path="/animals/new" render={(props) => {
        return <AnimalForm {...props} />
      }} />
      <Route exact path="/employees" render={props => {
  if (isAuthenticated()) {
    return <EmployeeList {...props} />
  } else {
    return <Redirect to="/login" />
  }
}} />
      <Route
        exact path="/employee/new"
        render={props => {
          return <EmployeeForm {...props} />;
        }}
      />
     <Route exact path="/locations" render={props => {
  if (isAuthenticated()) {
    return <LocationList {...props} />
  } else {
    return <Redirect to="/login" />
  }
}} />
      <Route path="/location/:locationId(\d+)"
        render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)}
            {...props} />
        }}
      />
      <Route path="/location/new" render={(props) => {
        return <LocationForm {...props} />;
      }}
      />
      <Route exact path="/owners" render={props => {
  if (isAuthenticated()) {
    return <OwnerList {...props} />
  } else {
    return <Redirect to="/login" />
  }
}} />
      <Route path="/owner/new" render={(props) => {
        return <OwnerForm {...props} />
      }} />

    </React.Fragment>
  );
}

export default ApplicationViews