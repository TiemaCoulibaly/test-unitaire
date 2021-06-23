/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function insert(users, user) {
  users.push(user)
  return users
}

module.exports = {
  insert
}