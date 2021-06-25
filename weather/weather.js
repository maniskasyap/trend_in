import express from 'express';
// import path from 'path';
import bodyParser from 'body-parser';

import got from 'got';

import config from './config.js';

const port = process.argv.slice(2)[0];
const app = express();
app.use(bodyParser.json());

const owApiKey = config.ow.apiKey;
const owBaseUrl = config.ow.baseUrl;
const owWeather = config.ow.weather;

const weatherByCityId = async (cityId) => {
  try {
    const url = `${owBaseUrl}${owWeather}?id=${cityId}&appid=${owApiKey}`;
    const options = {
      method: 'GET',
      retry: 0,
      responseType: 'json',
    };
    const { body } = await got(url, options);
    return body;
  } catch (error) {
    // console.log(error.response.body);
    throw error;
  }
};

app.get('/weather/:cityId', async (req, res, next) => {
  try {
    const cityId = req.params.cityId;
    const data = await weatherByCityId(cityId);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

// app.use('/img', express.static(path.join(__dirname, 'img')));

console.log(`Weather service listening on port ${port}`);
app.listen(port);
