import query from "../index.js";

async function createUsers() {
  let res = await query(`CREATE TABLE IF NOT EXISTS users (
        userid SERIAL PRIMARY KEY,
        username TEXT,
        tasklist jsonb[]);`);
  console.log("Created users table: ", res);
}

createUsers();
