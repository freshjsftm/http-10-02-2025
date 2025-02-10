const http = require('http');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.end('home page');
      break;
    case '/about':
      res.end('about page');
      break;
    default:
      res.end('404 - not found!');
      break;
  }
});

const port = 3000;
server.listen(port, () => {
  const startDate = new Date().toLocaleString();
  console.log(`server start at ${startDate} and listen port: ${port}`);
});
