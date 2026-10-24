const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log("request made");
  console.log(req.url, req.method);
  // set header content type
  // res.setHeader("Content-Type", "text/plain");
  // res.write("helloo ninjaass");
  // res.end();

  // SET HEADER CONTENT TYPE
  res.setHeader("Content-Type", "text/html");
  // res.write('<head><link rel="stylesheet" href="#"></head>');
  // res.write("<p>hai everyone</p>");
  // res.write("<h1>hai ninjas</h1>");

  // SEND HTML FILE
  // fs.readFile("./views/index.html", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end();
  //   } else {
  //     res.write(data);
  //     res.end();
  //   }
  // });

  // SENDING MULITIPLE HTML FILES
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

// lodash
// reqiore must come at the top
const _ = require("lodash");
const num = _.random(0, 30);
console.log(num);

// to call a function only once
const hello = _.once(() => {
  console.log("gud mrngg");
});

hello();
hello();
hello();
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
