FROM node:16.9.1-alpine AS builder
USER node
WORKDIR /home/node/
COPY --chown=node:node ./ ./
RUN npm install --ignore-script \
  && npm run build

FROM node:16.9.1-stretch-slim
USER node
WORKDIR /home/node/
COPY --from=builder /home/node/dist/ dist/
COPY --from=builder /home/node/package.json /home/node/package-lock.json ./
COPY --from=builder /home/node/.env ./
RUN npm install --ignore-script --production
EXPOSE 3000
CMD ["npm", "start"]
