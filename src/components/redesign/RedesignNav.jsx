import React from "react";
import { Link, useLocation } from "react-router-dom";

import INFO from "../../data/user";

const NAV_LINKS = [
	{ label: "Home", path: "/" },
	{ label: "About", path: "/about" },
	{ label: "Projects", path: "/projects" },
	{ label: "Articles", path: "/articles" },
	{ label: "Contact", path: "/contact" },
];

const RedesignNav = () => {
	const location = useLocation();

	const isActive = (path) =>
		path === "/"
			? location.pathname === "/"
			: location.pathname.startsWith(path);

	return (
		<header className="obsidian-header">
			<div className="obsidian-header-inner">
				<Link to="/" className="obsidian-brand">
					<img
						src={INFO.main.logo}
						alt="Logo"
						className="obsidian-brand-logo"
					/>
					<span className="obsidian-brand-name">{INFO.main.brand}</span>
				</Link>

				<nav className="obsidian-nav">
					{NAV_LINKS.map((l) => (
						<Link
							key={l.path}
							to={l.path}
							className={`obsidian-nav-link ${
								isActive(l.path) ? "active" : ""
							}`}
						>
							{l.label}
						</Link>
					))}
				</nav>

				{INFO.main.resume ? (
					<a
						href={INFO.main.resume}
						download
						className="obsidian-cta"
					>
						Resume
					</a>
				) : (
					<Link to="/contact" className="obsidian-cta">
						Resume
					</Link>
				)}
			</div>
		</header>
	);
};

export default RedesignNav;
