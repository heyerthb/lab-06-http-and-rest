'use strict';

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');
const middlewares = jsonServer.defaults();

// router.render = (req,res) =>{
//   res.json({
//     results: res.locals.data,
//   });
// };

server.use(router);
server.use(middlewares);
server.listen(3000,()=> {
  console.log('json-server awaiting requests');
});