# Stage 1: Build the application
FROM node:24-alpine AS build

# Set working directory
WORKDIR /app

# Copy dependency files
# Note: Using wildcard to handle cases where lockfiles might be missing
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the project
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine

# Copy the build output from the previous stage to Nginx's serve directory
# Vite defaults the output directory to 'dist'
COPY --from=build /app/dist /usr/share/nginx/html

# Configure Nginx to handle SPA routing (redirecting all requests to index.html)
RUN printf "server { \n\
  listen 80; \n\
  server_tokens off; \n\
  location / { \n\
  root /usr/share/nginx/html; \n\
  index index.html index.htm; \n\
  try_files \$uri \$uri/ /index.html; \n\
  } \n\
  }" > /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
