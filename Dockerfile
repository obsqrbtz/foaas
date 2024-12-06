FROM node:23-alpine

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application source
COPY . .

EXPOSE 3030

# Switch to a non-root user
USER node

CMD [ "node", "lib/server.js" ]
