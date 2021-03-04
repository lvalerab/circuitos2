/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "PERM_CAPE_CATEGORIA_PERMISO";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("PK_PERM_CAPE");
    table.uuid("PADRE_CAPE_UID").nullable();
    table.uuid("APLI_UID").nullable();
    table.uuid("PROC_UID").nullable();
    table.timestamps(true, true);
    table.charset("utf32");
    table.collate("utf32_general_ci");
    table.comment("Almacena las categorias de permisos por aplicación y/o procedimiento");
    table.foreign("PADRE_CAPE_UID","FK_PERM_CAPE_PERM_CAPE").references("PERM_CAPE_CATEGORIA_PERMISO.UID");
    table.foreign("APLI_UID","FK_PERM_CAPE_APLI_APLI").references("APLI_APLI_APLIACION.UID");    
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
