module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "MyTestDB",
  dialect: "mysql",
  PORT: "4001",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};