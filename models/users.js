import query from "../db/index";

//GET ALL USERS
export async function getAllUsers() {
  let getUsers = await query("SELECT * FROM users ORDER BY userid;");
  return getUsers.rows;
}

//GET USER BY ID
export async function getUserById(id) {
  let getUser = await query("SELECT * FROM users WHERE userid = $1;", [id]);
  return getUser.rows;
}

//CREATE NEW USER
export async function addUser(user) {
  const { username, tasklist } = user;

  let newUser = await query(
    `INSERT INTO users (username, tasklist) VALUES ($1, $2) RETURNING username, tasklist`,
    [username, tasklist]
  );

  return newUser.rows;
}
