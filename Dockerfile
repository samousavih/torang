FROM node:alpine
  

RUN mkdir -p /usr/src/torang
WORKDIR /usr/src/torang
COPY . /usr/src/torang

EXPOSE 3000 

RUN npm install  
RUN npm run build
CMD ["npm", "run","start:prod"]