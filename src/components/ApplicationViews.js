import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
//only include these once they are built - previous practice exercise
import LocationCard from "./locations/LocationCard";
import EmployeeCard from "./employees/EmployeeCard";
import OwnerCard from "./owners/OwnerCard";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import AnimalEditForm from "./animal/AnimalEditForm";

const ApplicationViews = () => {
	// Check if credentials are in session storage returns true/false
	const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
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
			{/* Make sure you add the `exact` attribute here */}
			{/* updated route: `/animals` */}
			<Route
				exact
				path="/animals"
				render={(props) => {
					if (isAuthenticated()) {
						return <AnimalList {...props} />;
					} else {
						return <Redirect to="/login" />;
					}
				}}
			/>
			{/* // Our shiny new route. */}
			<Route
				path="/animals/new"
				render={(props) => {
					return <AnimalForm {...props} />;
				}}
			/>
			<Route
				exact
				path="/animals/:animalId(\d+)"
				render={(props) => {
					if (isAuthenticated()) {
						return (
							<AnimalDetail
								animalId={parseInt(props.match.params.animalId)}
								{...props}
							/>
						);
					} else {
						return <Redirect to="/login" />;
					}
				}}
			/>
			<Route
				path="/animals/:animalId(\d+)/edit"
				render={(props) => {
					if (isAuthenticated()) {
						return <AnimalEditForm {...props} />;
					} else {
						return <Redirect to="/login" />;
					}
				}}
			/>
			); }} />
			{/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
			<Route
				path="/locations"
				render={(props) => {
					return <LocationCard />;
				}}
			/>
			<Route
				path="/employees"
				render={(props) => {
					return <EmployeeCard />;
				}}
			/>
			<Route
				path="/owners"
				render={(props) => {
					return <OwnerCard />;
				}}
			/>
		</React.Fragment>
	);
};

export default ApplicationViews;
