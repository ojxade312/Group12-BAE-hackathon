import query from "../db/index.js";

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

//UPDATE USER
export async function updateUser(id, updatedUser) {
  const { username, tasklist } = updatedUser;
  let userToBeUpdated = await query(
    "UPDATE users SET username=$1, tasklist=$2 WHERE userid=$3 RETURNING  username, tasklist",
    [username, tasklist, id]
  );
  return userToBeUpdated.rows;
}

//DELETE USER
export async function deleteUser(id) {
  let userToBeDeleted = await query(
    "DELETE FROM users WHERE userid = $1 RETURNING userid = $1",
    [id]
  );
  return userToBeDeleted.rows;
}
