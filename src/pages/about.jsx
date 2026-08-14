import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import RedesignNav from "../components/redesign/RedesignNav";
import RedesignFooter from "../components/redesign/RedesignFooter";

import INFO from "../data/user";
import SEO from "../data/seo";

import "../components/redesign/redesign.css";
import "./styles/about.css";
import myImage from "../assets/homepage.jpg";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");
	const page = INFO.aboutPage;

	return (
		<div className="obsidian">
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<RedesignNav />

			<main className="obsidian-main obsidian-about-main">
				{/* About Intro */}
				<section className="obsidian-about-intro">
					<div className="obsidian-about-intro-copy">
						<h1 className="obsidian-display obsidian-about-title">
							About Me
						</h1>
						{page.intro.map((p, i) => (
							<p
								key={i}
								className="obsidian-body obsidian-about-text"
							>
								{p}
							</p>
						))}
					</div>
					<div className="obsidian-about-visual">
						<div className="obsidian-about-image-wrap">
							<img
								src={myImage}
								alt="Profile"
								className="obsidian-about-image"
							/>
						</div>
					</div>
				</section>

				{/* Stats Cards */}
				<section className="obsidian-about-stats">
					{page.stats.map((s) => (
						<div key={s.label} className="obsidian-stat">
							<div className="obsidian-stat-value">{s.value}</div>
							<div className="obsidian-caption obsidian-stat-label">
								{s.label}
							</div>
						</div>
					))}
				</section>

				{/* Skills Grid */}
				<section>
					<h2 className="obsidian-heading obsidian-about-heading">
						Tech Stack
					</h2>
					<div className="obsidian-about-skills">
						{page.skills.map((s) => (
							<div key={s.name} className="obsidian-skill">
								<span className="material-symbols-outlined obsidian-skill-icon">
									{s.icon}
								</span>
								<span className="obsidian-caption obsidian-skill-name">
									{s.name}
								</span>
							</div>
						))}
					</div>
				</section>

				{/* Journey Timeline */}
				<section>
					<h2 className="obsidian-heading obsidian-about-heading">
						Career Journey
					</h2>
					<div className="obsidian-journey">
						{page.journey.map((j, i) => (
							<div key={i} className="obsidian-journey-item">
								<span className="material-symbols-outlined obsidian-journey-icon">
									{j.icon}
								</span>
								<span className="obsidian-label obsidian-journey-period">
									{j.period}
								</span>
								<h3 className="obsidian-journey-title">
									{j.title}
								</h3>
								<p className="obsidian-caption obsidian-journey-subtitle">
									{j.subtitle}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Philosophy */}
				<section>
					<h2 className="obsidian-heading obsidian-about-heading">
						My Philosophy
					</h2>
					<div className="obsidian-philosophy">
						{page.philosophy.map((p) => (
							<div
								key={p.title}
								className="obsidian-philosophy-card"
							>
								<span className="material-symbols-outlined obsidian-philosophy-icon">
									{p.icon}
								</span>
								<h3 className="obsidian-philosophy-title">
									{p.title}
								</h3>
								<p className="obsidian-caption obsidian-philosophy-text">
									{p.text}
								</p>
							</div>
						))}
					</div>
				</section>
			</main>

			<RedesignFooter />
		</div>
	);
};

export default About;
