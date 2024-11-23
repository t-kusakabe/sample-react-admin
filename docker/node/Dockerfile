##########################
## Builder Container
##########################
FROM node:23.3.0-alpine3.20 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i --no-progress

COPY . .

RUN npm run build

##########################
## Application Container
##########################
FROM node:23.3.0-alpine3.20

WORKDIR /app

COPY --from=builder /app ./

CMD ["npm", "run", "build"]
