const express = require("express");
const bodyparser = require("body-parser");
const router = express.Router();
// const morgan = require("morgan");
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "password",
    database: "social",
  },
});
const app = express();
const port = 3450 || 5430;
app.use(bodyparser.json());

// Router for login and signup

app.use("/", router);
require("./routers/loginAndSignup")(router, knex);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`post ${port} is working.......`);
});
