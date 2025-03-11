/* 
    Aqui estamos configurando o Knex para conectar-se com o banco de dados SQLite3. 
*/

export default{
    client: "sqlite3",
    connection: {
        filename: "./src/database/database.db",
    },
    pool: {
        afterCreate: (connection: any, done: any)=>{
            connection.run("PRAGMA foreign_keys = ON")
            done()
        },
    },
    useNullAsDefault: true,
    migrations: {
        extensions: "ts",
        directory: "./src/database/migrations",
    },
    seeds: {
        extensions: "ts",
        directory: "./src/database/seeds",
    },
}