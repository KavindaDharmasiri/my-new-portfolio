import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import RedesignNav from "../components/redesign/RedesignNav";
import RedesignFooter from "../components/redesign/RedesignFooter";

import INFO from "../data/user";
import SEO from "../data/seo";

import "../components/redesign/redesign.css";
import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<div className="obsidian">
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<RedesignNav />

			<main className="obsidian-main obsidian-projects-main">
				<header className="obsidian-projects-hero">
					<h1 className="obsidian-display obsidian-projects-title">
						Featured Projects
					</h1>
					<p className="obsidian-body obsidian-projects-desc">
						A curated selection of robust, scalable applications and
						digital solutions I&apos;ve architected and built. From
						complex enterprise systems to intuitive consumer apps,
						showcasing technical depth and modern engineering
						practices.
					</p>
				</header>

				<div className="obsidian-projects-grid">
					{INFO.projects.map((p, i) => {
						const actions = [];
						if (p.link) {
							actions.push({
								label: "View Project",
								icon: "open_in_new",
								href: p.link,
							});
						}
						if (p.github) {
							actions.push({
								label: "Repo",
								icon: "code",
								href: p.github,
								spacer: true,
							});
						}

						return (
							<article
								key={i}
								className="obsidian-project"
							>
								<div className="obsidian-project-icon">
									<span className="material-symbols-outlined">
										{p.icon || "folder"}
									</span>
								</div>

								<h3 className="obsidian-project-title">
									{p.title}
								</h3>
								<p className="obsidian-project-desc">
									{p.description}
								</p>

								{(p.tech || []).length > 0 && (
									<div className="obsidian-project-chips">
										{p.tech.map((t) => (
											<span
												key={t}
												className="obsidian-chip"
											>
												{t}
											</span>
										))}
									</div>
								)}

								{actions.length > 0 && (
									<div className="obsidian-project-actions">
										{actions.map((a) => (
											<a
												key={a.label}
												href={a.href}
												target="_blank"
												rel="noreferrer"
												className={`obsidian-project-action ${
													a.spacer
														? "obsidian-project-action-spacer"
														: ""
												}`}
											>
												<span className="material-symbols-outlined">
													{a.icon}
												</span>
												{a.label}
											</a>
										))}
									</div>
								)}
							</article>
						);
					})}
				</div>
			</main>

			<RedesignFooter />
		</div>
	);
};

export default Projects;
