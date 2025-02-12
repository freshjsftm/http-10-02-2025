const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const loadFile = (path) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data);
    });
  };

  if (req.method === 'GET') {
    switch (req.url) {
      case '/':
        loadFile('./views/index.html');
        break;
      case '/about':
        loadFile('./views/about.html');
        break;
      default:
        loadFile('./views/404.html');
        break;
    }
  }
});

const port = 3000;
server.listen(port, () => {
  const startDate = new Date().toLocaleString();
  console.log(`server start at ${startDate} and listen port: ${port}`);
});
