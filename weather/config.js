import { config } from 'dotenv';

config();

const envVars = { ...process.env };

const envConfig = {
  ow: {
    apiKey: envVars.OW_API_KEY,
    baseUrl: envVars.OW_BASE_URL,
    weather: envVars.OW_URI_WEATHER,
  },
};

export default envConfig;
