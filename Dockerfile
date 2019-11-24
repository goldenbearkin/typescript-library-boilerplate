FROM olliecaine/base:1.0.9

# Install dependencies
COPY package*.json ./
RUN npm install --prefer-offline

# Lint, test and build app
COPY . ./
RUN npm run lint
RUN npm run test
RUN npm run build