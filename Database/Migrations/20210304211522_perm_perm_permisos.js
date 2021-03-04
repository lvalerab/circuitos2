/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "PERM_PERM_PERMISOS";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("PK_PERM_PERM");
    table.uuid("CAPE_UID").notNullable();
    table.string("nombre",255);
    table.string("COD_PROG_IDENT",255);
    table.timestamps(true, true);
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Almacena los permisos disponibles en la aplicacion");
    table.foreign("CAPE_UID","FK_PERM_PERM_PERM_CAPE").references("PERM_CAPE_CATEGORIA_PERMISO.UID");    
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
