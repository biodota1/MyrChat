const queries = {
  getUsers: function () {
    return "SELECT * FROM users";
  },
  getUserById: function (id) {
    return `SELECT * FROM users WHERE id = ${id}`;
  },
  checkUserExist: function (username) {
    return `SELECT 1 FROM users WHERE username = '${username}'`;
  },
  addUser: function (username, password) {
    return `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;
  },
  deleteUser: function (id) {
    return `DELETE FROM users WHERE id = ${id}`;
  },
  updateUser: function (id, username) {
    return `UPDATE users SET username = '${username}' WHERE id = ${id}`;
  },
};

export default queries;
