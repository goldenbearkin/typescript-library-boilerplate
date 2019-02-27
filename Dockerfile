FROM base:latest

# Install dependencies
COPY package*.json ./
RUN npm install

# Lint, test and build app
COPY . ./
RUN npm run lint
RUN npm run test
RUN npm run build