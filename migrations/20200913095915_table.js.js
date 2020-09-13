exports.up = async function (knex) {
  return await knex.schema.createTable("signupTable", (table) => {
    table.string("firstname", 50).notNullable();
    table.string("lastname", 50).notNullable();
    table.string("mobileOremail", 100).notNullable();
    table.string("password", 20).notNullable();
    table.string("date", 20).notNullable();
    table.string("gender", 10).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("signupTable");
};
