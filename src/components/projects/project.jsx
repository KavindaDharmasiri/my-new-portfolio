import React from "react";
import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description } = props;

	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					<div className="project-logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
