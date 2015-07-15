import express from 'express';
import engine from 'express-handlebars';
import path from 'path';

let app = express();
// require('node-jsx').install();


app.engine('hbs', engine());
app.set('views', __dirname + '/src/server/views');
app.set('view engine', 'hbs');

let serveApp = (req, res)=> {
  res.render('layout', {
    app: "Oi!"
  });
};

app.get('/', serveApp);
app.get('/login', serveApp);

app.use(express.static('dist'));

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
