FROM bhurlow/lein-node
ADD . /app
WORKDIR /app
CMD node index.js

