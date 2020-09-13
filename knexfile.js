module.exports = {
  development: {
    client: "mysql",
    connection: "mysql://root:password@localhost:3306/social",
    migrations: {
      directory: __dirname + "/migrations",
    },
  },
  production: {
    client: "mysql",
    connection: "mysql://root:password@localhost:3306/social",
  },
};
