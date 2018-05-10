const http = require('http');
const fs = require('fs');

console.log('Server starting...');
console.log('Server listening on 4500');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'video/mp4'});
  //let rs = fs.createReadStream('Bebop_Drone_2016-03-11T094822+0000_93839F.mp4');
  let rs = fs.createReadStream('FishTraining.mp4');
  rs.pipe(response);
}).listen(4500);