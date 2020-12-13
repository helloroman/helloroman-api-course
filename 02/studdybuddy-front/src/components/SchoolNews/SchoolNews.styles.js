import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  position: relative;
  overflow-y: scroll;
`;

export const Title = styled.h2`
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

export const Articles = styled.ul`
  list-style: none;
  margin: 0;
  padding: 120px 40px 50px;
  display: flex;
  flex-direction: column;
`;

export const Article = styled.li`
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

export const ArticleImage = styled.div`
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
