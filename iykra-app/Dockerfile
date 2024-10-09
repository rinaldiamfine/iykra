
FROM node:22

WORKDIR /iykra-app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "main"]