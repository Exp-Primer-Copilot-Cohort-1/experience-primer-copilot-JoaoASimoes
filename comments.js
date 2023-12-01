// create a web server 
// import express from 'express';
// import { v4 as uuidv4 } from 'uuid';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import fs from 'fs';
// import { fileURLToPath } from 'url';
// import path, { dirname } from 'path';
// import { createRequire } from 'module';

// const require = createRequire(import.meta.url);
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // create an express app
// const app = express();

// // use the express-static middleware
// app.use(express.static("public"));

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // define the first route
// app.get("/api", (req, res) => {
//   res.send("<h1>Hello World!</h1>");
// });

// app.get('/api/comments', (req, res) => {
//   fs.readFile('./data/comments.json', 'utf-8', (err, data) => {
//     if (err) {
//       throw err;
//     }
//     res.send(JSON.parse(data));
//   });
// });

// app.post('/api/comments', (req, res) => {
//   const { name, message } = req.body;
//   const newComment = {
//     id: uuidv4(),
//     name,
//     message,
//     date: Date.now()
//   };
//   fs.readFile('./data/comments.json', 'utf-8', (err, data) => {
//     if (err) {
//       throw err;
//     }
//     const comments = JSON.parse(data);
//     comments.push(newComment);
//     fs.writeFile('./data/comments.json', JSON.stringify(comments), (err) => {
//       if (err) {
//         throw err;
//       }
//       res.send('Comment has been saved!');
//     });
//   });
// });

// app.listen(3000, () => {
//   console.log("server started");
// });

// // Path: index.html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Comments</title>
// </head>
// <body>
//   <div id="comments"></div>