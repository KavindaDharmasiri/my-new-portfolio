import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import RedesignNav from "../components/redesign/RedesignNav";
import RedesignFooter from "../components/redesign/RedesignFooter";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "../components/redesign/redesign.css";
import "./styles/articles.css";

const Articles = () => {
	const [email, setEmail] = useState("");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");
	const page = INFO.articlesPage;

	const featuredIndex = myArticles.findIndex((a) => a().featured);
	const featured =
		featuredIndex >= 0 ? { article: myArticles[featuredIndex](), index: featuredIndex + 1 } : null;
	const recent = myArticles
		.map((a, i) => ({ article: a(), index: i + 1 }))
		.filter((a) => !a.article.featured);

	const handleSubscribe = (e) => {
		e.preventDefault();
		setEmail("");
	};

	return (
		<div className="obsidian">
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<RedesignNav />

			<main className="obsidian-main obsidian-articles-main">
				{/* Hero */}
				<header className="obsidian-articles-hero">
					<h1 className="obsidian-display">{page.title}</h1>
					<p className="obsidian-articles-hero-desc">
						{page.description}
					</p>
				</header>

				{/* Featured Article */}
				{featured && (
					<section>
						<Link
							to={`/article/${featured.index}`}
							className="obsidian-featured"
						>
							<div
								className="obsidian-featured-image"
								style={{
									backgroundImage: `url(${featured.article.image})`,
								}}
							></div>
							<div className="obsidian-featured-body">
								<div className="obsidian-article-meta">
									<span className="obsidian-chip">
										{featured.article.category}
									</span>
									<span className="obsidian-read">
										<span className="material-symbols-outlined">
											schedule
										</span>
										{featured.article.readTime}
									</span>
								</div>
								<h2 className="obsidian-articles-title">
									{featured.article.title}
								</h2>
								<p className="obsidian-articles-desc">
									{featured.article.description}
								</p>
								<span className="obsidian-read-link">
									Read article
									<span className="material-symbols-outlined">
										arrow_forward
									</span>
								</span>
							</div>
						</Link>
					</section>
				)}

				{/* Grid + Sidebar */}
				<div className="obsidian-articles-layout">
					<div className="obsidian-articles-list-col">
						<h2 className="obsidian-articles-list-title">
							{page.recentTitle}
						</h2>

						<div className="obsidian-articles-list">
							{recent.map(({ article, index }) => (
								<article key={index} className="obsidian-articles-item">
									<Link
										to={`/article/${index}`}
										className="obsidian-articles-card"
									>
										<div className="obsidian-articles-thumb">
											<img
												src={article.image}
												alt=""
												className="obsidian-articles-thumb-img"
											/>
										</div>
										<div className="obsidian-articles-card-body">
											<div className="obsidian-articles-card-meta">
												<span className="obsidian-articles-date">
													{article.date}
												</span>
												<span className="obsidian-dot"></span>
												<span className="obsidian-articles-cat">
													{article.category}
												</span>
											</div>
											<h3 className="obsidian-articles-card-title">
												{article.title}
											</h3>
											<p className="obsidian-articles-card-desc">
												{article.description}
											</p>
											<div className="obsidian-articles-card-read">
												<span className="material-symbols-outlined">
													timer
												</span>
												{article.readTime}
											</div>
										</div>
									</Link>
								</article>
							))}
						</div>

						<button className="obsidian-load-more">
							{page.loadMore}
						</button>
					</div>

					<aside className="obsidian-articles-side">
						<div className="obsidian-topics">
							<h3 className="obsidian-articles-side-title">
								Popular Topics
							</h3>
							<div className="obsidian-topics-list">
								{page.topics.map((t) => (
									<span
										key={t.label}
										className={`obsidian-topic obsidian-topic-${t.tone}`}
									>
										{t.label}
									</span>
								))}
							</div>
						</div>

						<div className="obsidian-subscribe">
							<h3 className="obsidian-articles-side-title">
								{page.subscribe.title}
							</h3>
							<p className="obsidian-subscribe-text">
								{page.subscribe.text}
							</p>
							<form
								className="obsidian-subscribe-form"
								onSubmit={handleSubscribe}
							>
								<input
									className="obsidian-subscribe-input"
									type="email"
									required
									placeholder={page.subscribe.placeholder}
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<button
									className="obsidian-subscribe-btn"
									type="submit"
								>
									{page.subscribe.button}
								</button>
							</form>
						</div>
					</aside>
				</div>
			</main>

			<RedesignFooter />
		</div>
	);
};

export default Articles;
