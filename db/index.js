import pg from "pg";
import dbconfig from "../config.js";

const pool = new pg.Pool({
  //   user: dbconfig.user,
  //   host: dbconfig.host,
  //   database: dbconfig.db,
  //   password: dbconfig.password,
  //   port: dbconfig.dbport,
  connectionString: dbconfig.dbstring,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
