import './loadEnvironment.js';
import express from 'express';
import configViewEngine from './web/config/configViewEngine.js';

// Initialize express
const app = express();
const port = process.env.PORT ?? '3000';
// Configure view engine for EJS
configViewEngine(app);

app.get('/', (req, res) => res.render('index', { title: 'home' }));
app.get('/world', (req, res) => res.render('index', { title: 'world' }));
app.get('/moon', (req, res) => res.render('index', { title: 'moon' }));
app.get('/ping', (req, res) => res.send('pong'));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
