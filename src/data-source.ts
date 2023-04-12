import "reflect-metadata"
import { DataSource } from "typeorm"
import { A } from "./entity/A"
import { B } from "./entity/B"
import { C } from "./entity/C"
import { D } from "./entity/D"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "127.0.0.1",
    port: 5433,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [A, B, C, D],
    migrations: [],
    subscribers: [],
})
