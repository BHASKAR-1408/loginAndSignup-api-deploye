module.exports = (signupOrlogin, knex) => {
  signupOrlogin.post("/signup", (req, res) => {
    knex("signupTable")
      .insert(req.body)
      .then((rows) => {
        res.send("data is inserted successfully");
      })
      .catch((err) => {
        res.send(err);
      });
  });

  signupOrlogin.post("/login", (req, res) => {
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
