import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
	Article,
	ArticleImage,
	Articles,
	Title,
	Wrapper,
} from 'components/SchoolNews/SchoolNews.styles';

const query = `{
  allArticles {
    title
    content
    image {
      url
      alt
    }
  }
}`;

const DATO_TOKEN = '6a8dcd4f6ad3d577034e7a33861f6c';

const MAX_TEXT_LENGTH = 150;

export const cutText = (content) => {
	if (content.length > MAX_TEXT_LENGTH) {
		return `${content.slice(0, MAX_TEXT_LENGTH)}...`;
	}
};

const SchoolNews = () => {
	const [articles, setArticles] = useState([]);
	const [showMore, setShowMore] = useState(false);

	useEffect(() => {
		fetch('https://graphql.datocms.com', {
			// GraphQL różni sie od Rest API tym, że wykorzystujemy metodę POST do pobierania nie GET. Ponieważ w metodzie POST możemy zawrzeć body, w którym będzie zawarte nasze QUERY GraphQL'owe. W metodzie GET nie możemy zawrzeć w body dodatkowych informacji
			method: 'POST',
			headers: {
				Authorization: `Baerer ${DATO_TOKEN}`, //`Baerer - według konwencji, token okaziciela, posiadacza itd.
			},
			body: JSON.stringify({
				query,
			}),
		})
			.then((res) => res.json())
			.then(({ data: { allArticles } }) => {
				console.log(allArticles);
				setArticles(allArticles);
			})
			.catch((err) => console.log(err));
	}, []);

	const showArticle = () => {
		setShowMore(!showMore);
	};

	return (
		<Wrapper>
			<Title>Gazetka szkolna</Title>
			<Articles>
				{articles.length ? (
					articles.map((article, index) => (
						<Article key={`article-${index}`}>
							<ArticleImage>
								<img
									src={article.image.url}
									alt={article.image.alt}
								/>
							</ArticleImage>
							<div>
								<h3>{article.title}</h3>
								<p>
									{showMore
										? article.content
										: cutText(article.content)}
								</p>
							</div>
							<div>
								<button onClick={showArticle}>Więcej</button>
							</div>
						</Article>
					))
				) : (
					<h1>No articles</h1>
				)}
			</Articles>
		</Wrapper>
	);
};

SchoolNews.propTypes = {};

export default SchoolNews;
