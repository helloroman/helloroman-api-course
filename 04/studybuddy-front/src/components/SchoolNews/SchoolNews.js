import React, { useEffect, useState }  from 'react';
import PropTypes from 'prop-types';
import { Article, ArticleImage, Articles, Title, Wrapper } from 'components/SchoolNews/SchoolNews.styles';
import { useQuery, gql } from '@apollo/client';

const query = gql`
        { 
          allArticles { 
            title
            content
            image {
              url
              alt
            }
          } 
        }
        `;

const SchoolNews = () => {
  const { loading, error, data } = useQuery(query);

  return (
    <Wrapper>
      <Title>Gazetka szkolna</Title>
      <Articles>
        {loading && <h1>Loading...</h1>}
        {(!loading && !error) ? (data.allArticles.map(article => (
          <Article key={article.title}>
            <ArticleImage>
              <img src={article.image.url} alt={article.image.alt} />
            </ArticleImage>
            <div>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </div>
          </Article>
        ))) : null }
        {error && <h1>Error! Try again.</h1>}
      </Articles>
    </Wrapper>
  );
}

SchoolNews.propTypes = {};

export default SchoolNews;
