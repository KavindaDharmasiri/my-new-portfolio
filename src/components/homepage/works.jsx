import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./company.jpg"
								alt="epic lanka"
								className="work-image"
							/>
							<div className="work-title">Epic Lanka</div>
							<div className="work-subtitle">
								Intern Software Engineer
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./company.jpg"
								alt="epic lanka"
								className="work-image"
							/>
							<div className="work-title">Epic Lanka</div>
							<div className="work-subtitle">
								Associate Software Developer
							</div>
							<div className="work-duration">2024 - 2025</div>
						</div>

						<div className="work">
							<img
								src="./company.jpg"
								alt="epic lanka"
								className="work-image"
							/>
							<div className="work-title">Epic Lanka</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">2025 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
