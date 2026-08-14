import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import RedesignNav from "../components/redesign/RedesignNav";
import RedesignFooter from "../components/redesign/RedesignFooter";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "../components/redesign/redesign.css";
import "../components/homepage/styles/homepage.css";
import myImage from "../assets/homepage.jpg";

const heroLinks = [
	{ icon: "code", href: INFO.socials.github, external: true, label: "GitHub" },
	{
		icon: "work",
		href: INFO.socials.linkedin,
		external: true,
		label: "LinkedIn",
	},
	{ icon: "terminal", href: "/projects", external: false, label: "Projects" },
];

const work = [
	{
		company: "Epic Lanka",
		role: "Intern Software Engineer",
		period: "2022 - 2023",
		initials: "EL",
	},
	{
		company: "Epic Lanka",
		role: "Associate Software Developer",
		period: "2024 - 2025",
		initials: "EL",
	},
	{
		company: "Epic Lanka",
		role: "Software Developer",
		period: "2025 - Present",
		initials: "EL",
	},
];

const Homepage = () => {
	const currentSEO = SEO.find((item) => item.page === "home");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [titleMain, titleSub] = INFO.homepage.title.split(", ");

	return (
		<div className="obsidian">
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<RedesignNav />

			<main className="obsidian-main obsidian-home-main">
				{/* Hero Section */}
				<section className="obsidian-hero">
					<div className="obsidian-hero-copy">
						<h1 className="obsidian-display">
							{titleMain}
							<br />
							<span className="obsidian-display-sub">{titleSub}</span>
						</h1>

						<p className="obsidian-body obsidian-hero-description">
							{INFO.homepage.description}
						</p>

						<div className="obsidian-hero-actions">
							{heroLinks.map((l) =>
								l.external ? (
									<a
										key={l.icon}
										href={l.href}
										target="_blank"
										rel="noreferrer"
										className="obsidian-icon-button"
										aria-label={l.label}
									>
										<span className="material-symbols-outlined">
											{l.icon}
										</span>
									</a>
								) : (
									<Link
										key={l.icon}
										to={l.href}
										className="obsidian-icon-button"
										aria-label={l.label}
									>
										<span className="material-symbols-outlined">
											{l.icon}
										</span>
									</Link>
								)
							)}
						</div>
					</div>

					<div className="obsidian-hero-visual">
						<div className="obsidian-hero-image-wrap">
							<img
								src={myImage}
								alt="Profile"
								className="obsidian-hero-image"
							/>
						</div>
					</div>
				</section>

				{/* Projects Grid */}
				<section className="obsidian-section">
					<h2 className="obsidian-heading">Selected Projects</h2>
					<div className="obsidian-project-grid">
						{INFO.projects.slice(0, 6).map((p, i) => {
							const content = (
								<React.Fragment>
									<div className="obsidian-card-icon">
										<span className="material-symbols-outlined">
											{p.icon || "folder"}
										</span>
									</div>
									<div>
										<h3 className="obsidian-card-title">{p.title}</h3>
										<p className="obsidian-caption obsidian-card-text">
											{p.description}
										</p>
									</div>
								</React.Fragment>
							);

							return p.link ? (
								<a
									key={i}
									href={p.link}
									target="_blank"
									rel="noreferrer"
									className="obsidian-card"
								>
									{content}
								</a>
							) : (
								<article key={i} className="obsidian-card">
									{content}
								</article>
							);
						})}
					</div>
				</section>

				{/* Articles & Experience Split */}
				<section className="obsidian-split">
					<div className="obsidian-split-col">
						<h2 className="obsidian-heading">Recent Articles</h2>
						<div className="obsidian-timeline">
							{myArticles.map((article, index) => (
								<article
									key={index}
									className="obsidian-timeline-item"
								>
									<div className="obsidian-timeline-meta">
										<span className="obsidian-timeline-dot"></span>
										<span className="obsidian-label">
											{article().date}
										</span>
									</div>
									<h3 className="obsidian-timeline-title">
										{article().title}
									</h3>
									<p className="obsidian-caption obsidian-timeline-text">
										{article().description}
									</p>
									<Link
										to={`/article/${index + 1}`}
										className="obsidian-read-link"
									>
										Read article
										<span className="material-symbols-outlined">
											chevron_right
										</span>
									</Link>
								</article>
							))}
						</div>
					</div>

					<div className="obsidian-split-col">
						<h2 className="obsidian-heading">Work Experience</h2>
						<div className="obsidian-work-card">
							<div className="obsidian-work-header">
								<span className="material-symbols-outlined">
									work
								</span>
								<span className="obsidian-work-header-title">
									Work
								</span>
							</div>
							<ul className="obsidian-work-list">
								{work.map((w, i) => (
									<li key={i} className="obsidian-work-item">
										<div className="obsidian-work-avatar">
											{w.initials}
										</div>
										<div className="obsidian-work-info">
											<div className="obsidian-work-top">
												<div>
													<h4 className="obsidian-work-company">
														{w.company}
													</h4>
													<p className="obsidian-caption obsidian-work-role">
														{w.role}
													</p>
												</div>
												<span className="obsidian-label obsidian-work-period">
													{w.period}
												</span>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
			</main>

			<RedesignFooter />
		</div>
	);
};

export default Homepage;
