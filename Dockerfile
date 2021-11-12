FROM node:14.15
WORKDIR /app 
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 8000
RUN npm run build
CMD ["node","./dist/server.js"]