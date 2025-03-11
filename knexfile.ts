/* 

    Aqui estamos configurando o Knex para conectar-se com o banco de dados SQLite3. 

*/

export default{
    client: "sqlite3",
    connection: {
        filename: "./src/database/database.db",
    },
    useNullAsDefault: true,
    migrations: {
        extensions: "ts",
        directory: "./src/database/migrations"
    },
    seeds: {
        extensions: "ts"
        directory: "./src/database/seeds"
    }
}