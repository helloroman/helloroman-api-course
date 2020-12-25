import React from 'react';
import PropTypes from 'prop-types';
import { Article, ArticleImage, Articles, Title, Wrapper } from 'components/SchoolNews/SchoolNews.styles';


const SchoolNews = () => (
  <Wrapper>
    <Title>Gazetka szkolna</Title>
    <Articles>
      <Article>
        <ArticleImage>
          <img src="https://picsum.photos/250/250" />
        </ArticleImage>
        <div>
        <h3>Wymiana komputerów</h3>
        <p>Już niebawem w sali informatycznej 118
          pojawi się kilka nowych urządzeń!</p>
        </div>
      </Article>
      <Article>
        <ArticleImage>
          <img src="https://picsum.photos/250/250" />
        </ArticleImage>
        <div>
          <h3>Wymiana komputerów</h3>
          <p>Już niebawem w sali informatycznej 118
            pojawi się kilka nowych urządzeń!</p>
        </div>
      </Article>
      <Article>
        <ArticleImage>
          <img src="https://picsum.photos/250/250" />
        </ArticleImage>
        <div>
          <h3>Wymiana komputerów</h3>
          <p>Już niebawem w sali informatycznej 118
            pojawi się kilka nowych urządzeń!</p>
        </div>
      </Article>
    </Articles>
  </Wrapper>
);

SchoolNews.propTypes = {};

export default SchoolNews;
