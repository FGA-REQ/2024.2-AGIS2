FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npx prisma generate

EXPOSE 80

CMD ["npm", "run", "start:deploy"]