const http = require('http');

const server = http.createServer((req, res) => {
  
  const url = req.url;

  if(url === ' ')
  {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome</h1></body>')
    res.write('</html>');
    return res.end();
    }

  else if(url === '/home')
  {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Welcome home</h1></body>')
  res.write('</html>');
  return res.end();
  }

  else if (url === '/about')
  {
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Welcome to About Us page</h1></body>')
  res.write('</html>');
  return res.end();
  } 
  
  else if (url === '/node')
  {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><titleMy First Page</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>')
    res.write('</html>');
    return res.end();
  }
});

const port = 4000;

server.listen(port)
