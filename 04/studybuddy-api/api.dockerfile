FROM node:alpine3.11
RUN mkdir -p /app
WORKDIR /app
COPY studybuddy-api/package*.json ./
RUN npm install
COPY studybuddy-api/ .
RUN npm run build
EXPOSE $PORT
ENV MONGODB_URI=$MONGODB_URI
CMD [ "node", "dist/main" ]
