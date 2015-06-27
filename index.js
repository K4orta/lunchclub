import express from 'express';
import renderer from 'react-engine';
import path from 'path';

let app = express();
// require('node-jsx').install();
let engine = renderer.server.create({
  reactRoutes: __dirname + '/src/shared/routes'
});

app.engine('.jsx', engine);
app.set('views', __dirname + '/src/shared/components/views');
app.set('view engine', 'jsx');
app.set('view', renderer.expressView);

app.get('/', (req, res)=> {
  res.render(req.url, {});
});

var server = app.listen(3000, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
