FROM node:alpine

WORKDIR /usr/src/app

COPY . .
ENV DATABASE_URL="postgresql://postgres:senha_super_segura@localhost:5432/meu-postgres"

RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "dev"]