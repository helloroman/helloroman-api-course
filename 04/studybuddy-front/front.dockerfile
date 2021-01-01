FROM node:alpine3.11
RUN mkdir -p /app
WORKDIR /app
COPY studybuddy-front/package*.json ./
RUN npm install
COPY studybuddy-front/ .
ENV REACT_APP_DATO_TOKEN=$REACT_APP_DATO_TOKEN
ENV REACT_APP_PROXY_API=$REACT_APP_PROXY_API
CMD npm start
