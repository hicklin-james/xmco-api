require('dotenv').config();

export default {
  port: 5001,
  accessTokenExpiresIn: 15,
  origin: 'http://localhost:3000',
  dbName: process.env.MONGODB_DATABASE_NAME,
  dbUser: process.env.MONGODB_USERNAME,
  dbPass: process.env.MONGODB_PASSWORD,
  accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY,
  accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY,
};