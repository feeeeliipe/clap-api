FROM node:14

WORKDIR /usr/app/

COPY package*.json ./

RUN npm ci --silent

COPY src/ src/

EXPOSE 3000

CMD ["npm", "start"]
