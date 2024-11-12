# Use an official Node.js runtime as the base image
FROM node:22

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use an official Node.js runtime as the base image
FROM node:22

# Set working directory
WORKDIR /app
# ###
# Copy the necessary files for running the application
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
# COPY --from=builder /app/node_modules ./node_modules

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3001

# Expose the port the app runs on
EXPOSE 3001

# Run the Next.js application
CMD ["npx", "next", "start"]