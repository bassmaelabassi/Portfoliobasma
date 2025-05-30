FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Install PM2 globally
RUN npm install -g pm2

# Expose the port the app runs on
EXPOSE 5000

# Start the application with PM2
CMD ["pm2-runtime", "start", "server.js", "--name", "portfolio-backend"] 