import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
//only include these once they are built - previous practice exercise
import LocationCard from "./locations/LocationCard";
import EmployeeCard from "./employees/EmployeeCard";
import OwnerCard from "./owners/OwnerCard";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";

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
			{/* Make sure you add the `exact` attribute here */}
			{/* updated route: `/animals` */}
			<Route
				exact
				path="/animals"
				render={(props) => {
					return <AnimalList {...props} />;
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
				path="/animals/:animalId(\d+)"
				render={(props) => {
					// Pass the animalId to the AnimalDetailComponent
					return (
						<AnimalDetail
							animalId={parseInt(props.match.params.animalId)}
							{...props}
						/>
					);
				}}
			/>
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
