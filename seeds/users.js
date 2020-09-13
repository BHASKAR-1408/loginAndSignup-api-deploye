exports.seed = async function (knex) {
  return knex("signupTable").insert([
    {
      firstname: "badivenkatagalla",
      lastname: "bhaskar",
      mobileOremail: "bhaskar19@navgurukul.org",
      password: "bk3018",
      date: "12-08-2020",
      gender: "male",
    },
    {
      firstname: "inumula",
      lastname: "ramesh",
      mobileOremail: "ramesh@navgurukul.org",
      password: "siri",
      date: "12-08-2020",
      gender: "male",
    },
    {
      firstname: "vivek",
      lastname: "sunkara",
      mobileOremail: "sunkara19@navgurukul.org",
      password: "sunkara9949",
      date: "12-08-2020",
      gender: "male",
    },
  ]);
};
