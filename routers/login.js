module.exports = (login, knex) => {
  login.post("/", (req, res) => {
    knex("signupTable")
      .select("*")
      .then((rows) => {
        res.send(rows);
      })
      .catch((err) => {
        res.send(err);
      });
  });
};
