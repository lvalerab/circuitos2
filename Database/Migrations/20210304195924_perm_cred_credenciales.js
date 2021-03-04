/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "PERM_CRED_CREDENCIALES";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("UID").primary("PK_PERM_CRED");
    table.uuid("USER_UID");
    table.string("login",255);
    table.string("password",255);
    table.string("token",255);
    table.boolean("activo");
    table.boolean("maquina");    
    table.timestamps(true, true);
    table.foreign("USER_UID","FK_PERM_CRED_PERM_USER").references("PERM_USUA_USUARIOS.UID");
    table.comment("Tabla donde se almacena las credenciales que usará un usuario");
    table.charset("utf32");
    table.collate("utf32_general_ci");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
