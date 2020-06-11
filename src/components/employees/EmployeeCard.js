import React from "react";

const EmployeeCard = (props) => {
	return (
		<div className="card">
			<div className="employeeCard-content">
				<h3>
					Employee Name:{" "}
					<span className="employeeCard-name">{props.employee.name}</span>
				</h3>
				<button
					type="button"
					onClick={() => {
						props.history.push(`/employees/${props.employee.id}/details`);
					}}
				>
					Details
				</button>
				<button
					type="button"
					onClick={() =>
						props.history.push(`/employees/${props.employee.id}/edit`)
					}
				>
					Edit
				</button>
				<button
					type="button"
					onClick={() => props.deleteEmployee(props.employee.id)}
				>
					Buh Bye
				</button>
			</div>
		</div>
	);
};

export default EmployeeCard;
