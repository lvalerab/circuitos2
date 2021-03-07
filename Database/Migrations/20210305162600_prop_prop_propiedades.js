/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "PROP_PROP_PROPIEDADES";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("PK_PROP_PROPIEDADES");
    table.uuid("CAPR_UID");
    table.string("codigo",255);
    table.enum("tipo",["VCHAR","VINT","VDOUBLE","BOOL"]);
    table.enum("lista",["S","N"]);
    table.timestamps(true, true);
    table.unique(["codigo"],'UX_PROP_PROP');
    table.foreign("CAPR_UID","FK_PROP_PROP_PROP_CAPR").references("PROP_CAPR_CATEGORIA_PROP.UID");
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Almacena las propiedades de la aplicacion");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
