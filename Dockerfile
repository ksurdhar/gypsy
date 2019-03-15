FROM node:alpine

WORKDIR /app

# only copy package.json so that changes to index.js won't invalidate npm image
COPY package.json .
RUN npm install

COPY ./ ./

EXPOSE 8080
CMD ["npm", "start"]
