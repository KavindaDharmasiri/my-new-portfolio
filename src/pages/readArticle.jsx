import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Link } from "react-router-dom";

import RedesignNav from "../components/redesign/RedesignNav";
import RedesignFooter from "../components/redesign/RedesignFooter";

import INFO from "../data/user";
import myArticles from "../data/articles";

import "../components/redesign/redesign.css";
import "./styles/readArticle.css";

let ArticleStyle = styled.div``;

const ReadArticle = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const article = myArticles[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [article]);

	if (!article) {
		return (
			<div className="obsidian">
				<RedesignNav />
				<main className="obsidian-main obsidian-article-read">
					<p className="obsidian-body">Article not found.</p>
				</main>
				<RedesignFooter />
			</div>
		);
	}

	ArticleStyle = styled.div`
		${article().style}
	`;

	return (
		<div className="obsidian">
			<Helmet>
				<title>{`${article().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article().description} />
				<meta name="keywords" content={article().keywords.join(", ")} />
			</Helmet>

			<RedesignNav />

			<main className="obsidian-main obsidian-article-read">
				<button
					className="obsidian-article-back"
					onClick={() => navigate(-1)}
				>
					<span className="material-symbols-outlined">
						arrow_back
					</span>
					Back
				</button>

				<article className="obsidian-article-read-body">
					<div className="obsidian-article-read-meta">
						{article().category && (
							<span className="obsidian-chip">
								{article().category}
							</span>
						)}
						<span className="obsidian-label obsidian-article-read-date">
							{article().date}
						</span>
						{article().readTime && (
							<span className="obsidian-read">
								<span className="material-symbols-outlined">
									schedule
								</span>
								{article().readTime}
							</span>
						)}
					</div>

					<h1 className="obsidian-article-read-title">
						{article().title}
					</h1>

					<p className="obsidian-body obsidian-article-read-desc">
						{article().description}
					</p>

					<div className="obsidian-article-read-content">
						<ArticleStyle>{article().body}</ArticleStyle>
					</div>

					<Link
						to="/articles"
						className="obsidian-read-link obsidian-article-read-more"
					>
						More articles
						<span className="material-symbols-outlined">
							chevron_right
						</span>
					</Link>
				</article>
			</main>

			<RedesignFooter />
		</div>
	);
};

export default ReadArticle;
