import express from 'express';
import renderer from 'react-engine';
import path from 'path';

let app = express();

app.engine = renderer.server.create({
  reactRoutes: 
});
