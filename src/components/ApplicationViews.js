import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
//only include these once they are built - previous practice exercise
import LocationCard from "./locations/LocationCard";
import EmployeeCard from "./employees/EmployeeCard";
import OwnerCard from "./owners/OwnerCard";
import AnimalList from "./animal/AnimalList";

const ApplicationViews = () => {
	return (
		<React.Fragment>
			<Route
				exact
				path="/"
				render={(props) => {
					return <Home />;
				}}
			/>
			<Route
				path="/animals"
				render={(props) => {
					return <AnimalList />;
				}}
			/>
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