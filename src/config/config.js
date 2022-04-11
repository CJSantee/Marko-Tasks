import { Pool } from "pg";

export const pool = new Pool({
    user: "db_admin",
    host: "localhost",
    database: "marko_tasks",
    password: "password",
    port: 5432,
});
