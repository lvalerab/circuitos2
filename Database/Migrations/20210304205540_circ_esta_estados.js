/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "CIRC_ESTA_ESTADOS";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("PK_CIRC_ESTA");
    table.uuid("CIRC_UID").notNullable();
    table.string("codigo",255);
    table.string("nombre",255);
    table.timestamps(true, true);
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Almacena los estados de los circuitos");
    table.foreign("CIRC_UID","FK_CIRC_ESTA_CIRC_CIRC").references("CIRC_CIRC_CIRCUITOS.UID");    
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
