require('dotenv').config(); // Load environment variables from .env file

const environment = process.env.NODE_ENV || 'dev'; // Default to 'dev'
const baseUrlType = process.env.BASE_URL_TYPE || 'JPH'; // Default to 'JPH' if not specified

const baseUrls = {
    JPH: {
      dev: process.env.BASE_URL_JPH_DEV,
      test: process.env.BASE_URL_JPH_TEST,
      prod: process.env.BASE_URL_JPH_PROD
    },
    RQ: {
      dev: process.env.BASE_URL_RQ_DEV,
      test: process.env.BASE_URL_RQ_TEST,
      prod: process.env.BASE_URL_RQ_PROD
    }
  };
  
  module.exports = {
    baseUrl: baseUrls[baseUrlType][environment] || baseUrls.JPH.dev // Fallback to 'JPH' dev if not found
  };
