import http from 'node:http';
import { readFileSync } from 'node:fs';

const homePage = readFileSync('./index.html');
const aboutPage = readFileSync('./about.html');
const contactPage = readFileSync('./contact-me.html');
const notFoundPage = readFileSync('./404.html');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res
      .writeHead(200, {
        'content-type': 'text/html',
      })
      .write(homePage);
    res.end();
  } else if (url === '/about') {
    res
      .writeHead(200, {
        'content-type': 'text/html',
      })
      .write(aboutPage);
    res.end();
  } else if (url === '/contact-me') {
    res
      .writeHead(200, {
        'content-type': 'text/html',
      })
      .write(contactPage);
    res.end();
  } else {
    res
      .writeHead(404, {
        'content-type': 'text/html',
      })
      .write(notFoundPage);
    res.end();
  }
});

const port = process.env.PORT || 8080;
server.listen(port, () =>
  console.log(`Server is listenning on port ${port}...`)
);
