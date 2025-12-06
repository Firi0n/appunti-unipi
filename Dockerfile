# Use official Node 20 Alpine image as base
FROM node:20-alpine

WORKDIR /app

# -----------------------------
# Install prerequisites for D2
# -----------------------------
# bash: required by D2 install script
# curl: download the installation script
# make: needed to build D2
RUN apk add --no-cache bash curl make

# -----------------------------
# Install D2 CLI
# -----------------------------
# The install script now installs d2 directly to /usr/local/bin
RUN curl -fsSL https://d2lang.com/install.sh | bash -s -- \
    && d2 --version  # Verify installation

# -----------------------------
# Install Node dependencies
# -----------------------------
COPY package.json package-lock.json* ./
RUN npm install

# -----------------------------
# Copy the rest of the project
# -----------------------------
COPY . .

# Expose Astro dev server port
EXPOSE 4321

# Start Astro dev server with host binding for container access
CMD ["npm", "run", "dev", "--", "--host"]
