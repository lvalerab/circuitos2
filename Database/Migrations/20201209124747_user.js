/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "PERM_USUA_USUARIOS";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("PK_PERM_USUA");
    table.string("nombre",255);
    table.string("apellido1",255);
    table.string("apellido2",255);
    table.string("email",255);
    table.string("telefono",30);
    table.timestamps(true, true);
    table.charset("utf32");
    table.collate("utf32_general_ci");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
