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
  
  if (req.url === '/views/style.css') {
    loadFile('./views/style.css');
  }

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

  if (req.method === 'POST') {
    switch (req.url) {
      case '/users':
        let jsonString = '';
        req.on('data', (chunk) => {
          jsonString += chunk;
        });
        req.on('end', () => {
          console.log(jsonString);
          res.end('data receive');
        });
        break;

      default:
        res.end('not found url');
        break;
    }
  }
});

const port = 3000;
server.listen(port, () => {
  const startDate = new Date().toLocaleString();
  console.log(`server start at ${startDate} and listen port: ${port}`);
});
