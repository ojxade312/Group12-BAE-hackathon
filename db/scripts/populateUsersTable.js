import query from "../index.js";
import users from "../mockdata.js";

async function populateUsersTable() {
  for (let i = 0; i < users.length; i++) {
    const username = users[i].username;
    const tasklist = users[i].tasklist;

    const res = await query(
      `INSERT INTO users (username, tasklist) VALUES ($1, $2)`,
      [username, tasklist]
    );
    console.log(res);
  }
}
populateUsersTable();
