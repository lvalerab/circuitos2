/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "GENE_DUID_DICT_UID";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("PK_GENE_DUID");
    table.uuid("TELE_UID");
    table.timestamps(true, true);
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Almacena todos los elementos de la aplicación");
    table.foreign("TELE_UID","FK_GENE_DUID_GENE_TELE").references("GENE_TELE_TIPO_ELEMENTOS.UID");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
