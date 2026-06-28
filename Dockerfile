# Stage 1: Build dependencies
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Install dependencies for both Frontend and Backend workspaces if using workspaces
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Stage 2: Production execution environment
FROM node:20-alpine

WORKDIR /usr/src/app

# Set production environment
ENV NODE_ENV=production

# Copy built node_modules and source from builder
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app .

# Expose API port
EXPOSE 8000

# Run via PM2 or directly with Node
CMD ["node", "index.js"]
