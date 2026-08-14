import React from "react";

import INFO from "../../data/user";

const RedesignFooter = () => {
	const socialLinks = [
		{ label: "LinkedIn", href: INFO.socials.linkedin },
		{ label: "GitHub", href: INFO.socials.github },
		{ label: "Twitter", href: INFO.socials.twitter },
		{ label: "Email", href: `mailto:${INFO.main.email}` },
	];

	return (
		<footer className="obsidian-footer">
			<div className="obsidian-footer-inner">
				<span className="obsidian-footer-credit">
					© {new Date().getFullYear()} {INFO.main.brand}. Built with
					Precision.
				</span>

				<nav className="obsidian-footer-nav">
					{socialLinks.map((l) => (
						<a
							key={l.label}
							href={l.href}
							target="_blank"
							rel="noreferrer"
							className="obsidian-footer-link"
						>
							{l.label}
						</a>
					))}
				</nav>
			</div>
		</footer>
	);
};

export default RedesignFooter;
