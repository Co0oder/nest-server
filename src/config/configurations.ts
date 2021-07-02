export default {
  port: parseInt(process.env.PORT, 10) || 3000,
  secret: process.env.SECRET || 'secret',
  login: process.env.LOGIN || 'admin',
  password: process.env.PASS || 'admin',
};
