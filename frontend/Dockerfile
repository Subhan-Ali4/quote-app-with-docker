#base image
FROM node:20-alpine

#directory
WORKDIR /app

#copy files

COPY package.json .

#nstall package

RUN npm install

copy . .

EXPOSE 3000

CMD ["npm","start"]


