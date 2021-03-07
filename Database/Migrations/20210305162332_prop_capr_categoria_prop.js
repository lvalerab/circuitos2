/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "PROP_CAPR_CATEGORIA_PROP";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("PK_PROP_CAPR");
    table.uuid("PADRE_CAPR_UID").nullable();
    table.string("nombre",255);
    table.timestamps(true, true);
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Almacena las categorías de propiedades");
    table.foreign("PADRE_CAPR_UID","FK_PROP_CAPR_PROP_CAPR").references("PROP_CAPR_CATEGORIA_PROP.UID");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
