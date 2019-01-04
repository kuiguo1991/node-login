module.exports = {
  queryAllSQL: "SELECT * FROM user",
  LoginSQL: "SELECT * FROM user WHERE USERNAME = ? AND PASSWORD = ?",
  addSQL:
    "INSERT INTO websites(id, name, url, alexa, country) VALUES(0,?,?,?,?)",
  modSQL:
    "UPDATE websites SET name = ?, url = ?,alexa = ?, country = ? WHERE id = ?",
  delSQL: "DELETE FROM websites where id = ?"
};