# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app files
COPY . .

# Build the app
RUN npm run build

# Expose the app port
EXPOSE 3000

# Run the app
CMD [ "npm", "start" ]