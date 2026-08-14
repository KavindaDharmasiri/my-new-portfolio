import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";

import RedesignNav from "../components/redesign/RedesignNav";
import RedesignFooter from "../components/redesign/RedesignFooter";

import INFO from "../data/user";
import SEO from "../data/seo";
import EMAILJS from "../data/emailjs";

import "../components/redesign/redesign.css";
import "./styles/contact.css";

const Contact = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [sending, setSending] = useState(false);
	const [status, setStatus] = useState(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");
	const page = INFO.contactPage;

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus(null);

		const configured =
			EMAILJS.serviceId &&
			EMAILJS.templateId &&
			EMAILJS.publicKey &&
			!EMAILJS.publicKey.startsWith("YOUR_");

		if (configured) {
			setSending(true);
			try {
				await emailjs.send(
					EMAILJS.serviceId,
					EMAILJS.templateId,
					{
						from_name: form.name,
						from_email: form.email,
						subject: form.subject,
						message: form.message,
						to_email: INFO.main.email,
					},
					{ publicKey: EMAILJS.publicKey }
				);
				setStatus("sent");
				setForm({ name: "", email: "", subject: "", message: "" });
			} catch (err) {
				console.error(err);
				setStatus("error");
			} finally {
				setSending(false);
			}
		} else {
			const subject = encodeURIComponent(
				form.subject || page.form.subjectPlaceholder
			);
			const body = encodeURIComponent(
				`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
			);
			window.location.href = `mailto:${INFO.main.email}?subject=${subject}&body=${body}`;
		}
	};

	const update = (key) => (e) =>
		setForm((prev) => ({ ...prev, [key]: e.target.value }));

	return (
		<div className="obsidian obsidian-contact">
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="obsidian-contact-grid-bg"></div>
			<div className="obsidian-contact-fade"></div>

			<RedesignNav />

			<main className="obsidian-main obsidian-contact-main">
				{/* Hero */}
				<header className="obsidian-contact-hero">
					<div className="obsidian-contact-badge">
						<span className="material-symbols-outlined">
							{page.badgeIcon}
						</span>
						{page.badge}
					</div>
					<h1 className="obsidian-display">
						{page.titleMain}{" "}
						<span className="obsidian-contact-title-accent">
							{page.titleAccent}
						</span>
					</h1>
					<p className="obsidian-contact-hero-desc">
						{page.description}
					</p>
				</header>

				{/* Content Grid */}
				<div className="obsidian-contact-grid">
					{/* Contact Form */}
					<div className="obsidian-contact-form-col">
						<div className="obsidian-contact-card">
							<form
								className="obsidian-contact-form"
								onSubmit={handleSubmit}
							>
								<div className="obsidian-contact-form-row">
									<div className="obsidian-contact-field">
										<label
											className="obsidian-contact-label"
											htmlFor="contact-name"
										>
											{page.form.nameLabel}
										</label>
										<input
											id="contact-name"
											className="obsidian-contact-input"
											type="text"
											required
											placeholder={page.form.namePlaceholder}
											value={form.name}
											onChange={update("name")}
										/>
									</div>
									<div className="obsidian-contact-field">
										<label
											className="obsidian-contact-label"
											htmlFor="contact-email"
										>
											{page.form.emailLabel}
										</label>
										<input
											id="contact-email"
											className="obsidian-contact-input"
											type="email"
											required
											placeholder={page.form.emailPlaceholder}
											value={form.email}
											onChange={update("email")}
										/>
									</div>
								</div>

								<div className="obsidian-contact-field">
									<label
										className="obsidian-contact-label"
										htmlFor="contact-subject"
									>
										{page.form.subjectLabel}
									</label>
									<input
										id="contact-subject"
										className="obsidian-contact-input"
										type="text"
										placeholder={page.form.subjectPlaceholder}
										value={form.subject}
										onChange={update("subject")}
									/>
								</div>

								<div className="obsidian-contact-field">
									<label
										className="obsidian-contact-label"
										htmlFor="contact-message"
									>
										{page.form.messageLabel}
									</label>
									<textarea
										id="contact-message"
										className="obsidian-contact-input obsidian-contact-textarea"
										rows="5"
										required
										placeholder={page.form.messagePlaceholder}
										value={form.message}
										onChange={update("message")}
									/>
								</div>

								<button
									type="submit"
									className="obsidian-contact-submit"
									disabled={sending}
								>
									{sending
										? "Transmitting..."
										: page.form.button}
									<span className="material-symbols-outlined">
										{page.form.buttonIcon}
									</span>
								</button>

								{status === "sent" && (
									<p className="obsidian-contact-status obsidian-contact-status-ok">
										Message transmitted. I'll get back to
										you soon.
									</p>
								)}
								{status === "error" && (
									<p className="obsidian-contact-status obsidian-contact-status-err">
										Transmission failed. Please email me
										directly at {INFO.main.email}.
									</p>
								)}
							</form>
						</div>
					</div>

					{/* Contact Details */}
					<div className="obsidian-contact-info-col">
						<div className="obsidian-contact-direct">
							<h3 className="obsidian-contact-section-title">
								{page.directTitle}
							</h3>
							<div className="obsidian-contact-direct-list">
								{page.direct.map((d) => (
									<a
										key={d.label}
										href={d.href}
										target="_blank"
										rel="noreferrer"
										className="obsidian-contact-link-card"
									>
										<div className="obsidian-contact-link-icon">
											<span className="material-symbols-outlined">
												{d.icon}
											</span>
										</div>
										<div>
											<div className="obsidian-contact-link-label">
												{d.label}
											</div>
											<div className="obsidian-contact-link-value">
												{d.value}
											</div>
										</div>
									</a>
								))}
							</div>
						</div>

						<div className="obsidian-contact-telemetry">
							<h3 className="obsidian-contact-telemetry-title">
								{page.telemetry.title}
							</h3>
							<div className="obsidian-contact-telemetry-body">
								<div className="obsidian-contact-telemetry-item">
									<span className="material-symbols-outlined obsidian-contact-telemetry-icon">
										{page.telemetry.location.icon}
									</span>
									<div>
										<div className="obsidian-contact-telemetry-value">
											{page.telemetry.location.title}
										</div>
										<div className="obsidian-contact-telemetry-text">
											{page.telemetry.location.text}
										</div>
									</div>
								</div>
								<div className="obsidian-contact-divider"></div>
								<div className="obsidian-contact-telemetry-item">
									<span className="material-symbols-outlined obsidian-contact-telemetry-icon obsidian-contact-status-icon">
										{page.telemetry.status.icon}
									</span>
									<div>
										<div className="obsidian-contact-telemetry-value obsidian-contact-status-line">
											{page.telemetry.status.title}
											<span className="obsidian-contact-ping-wrap">
												<span className="obsidian-contact-ping"></span>
												<span className="obsidian-contact-ping-dot"></span>
											</span>
										</div>
										<div className="obsidian-contact-telemetry-text">
											{page.telemetry.status.text}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			<RedesignFooter />
		</div>
	);
};

export default Contact;
