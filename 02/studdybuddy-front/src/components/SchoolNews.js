import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  position: relative;
  overflow-y: scroll;
`;

const Title = styled.h2`
  position: absolute;
  left: 0;
  margin-top: 50px;
  padding-right: 20px;
  background-color: #FFD84F;
  width: 120px;
  height: 70px;
  text-align: right;
  font-size: 15px;
  display: flex;
  align-items: center;
`;

const Articles = styled.ul`
  list-style: none;
  margin: 0;
  padding: 120px 40px 50px;
  display: flex;
  flex-direction: column;
`;

const Article = styled.li`
  display: flex;
  align-items: center;
  padding: 25px 0;
  position: relative;
  
  &:not(:last-child)::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background-color: #7C6208;
    bottom: 0;
    opacity: 10%;
  }
`;

const ArticleImage = styled.div`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 15px;
  overflow: hidden;
  margin-right: 40px;
  
  img {
    object-fit: fill;
  }
`;

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
