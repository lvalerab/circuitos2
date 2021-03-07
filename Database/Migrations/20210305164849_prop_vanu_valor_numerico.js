/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "PROP_VANU_VALOR_NUMERICO";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("PK_PROP_VANU");
    table.decimal("valor");
    table.timestamps(true, true);
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.foreign("UID","FK_PROP_VANU_PROP_VPEL").references("PROP_VPEL_VALO_PROP_ELEM.UID");
    table.comment("Almacena los valores de las propiedades numéricas");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
