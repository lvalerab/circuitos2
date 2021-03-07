/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "PROP_VPEL_VALO_PROP_ELEM";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("PK_PROP_VPEL");
    table.uuid("PROP_UID");
    table.uuid("ELEM_UID");
    table.integer("orden");
    table.timestamps(true, true);
    table.foreign("PROP_UID","FK_PROP_VPEL_PROP_PROP").references("PROP_PROP_PROPIEDADES.UID");
    table.foreign("ELEM_UID","FK_PROP_VPEL_GENE_DUID").references("GENE_DUID_DICT_UID.UID");
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Almacena la relacion de propiedades de un elemento dado");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
