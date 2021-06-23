const { v4: uuidv4 } = require('uuid');

/**
 * 
 * @param {string} firstName 
 * @param {string} lastName
 */
function createUser(firstName, lastName) {
  const now = new Date(Date.now())
  return {
    id: uuidv4(),
    firstName,
    lastName,
    fullName: firstName + ' ' + lastName,
    createdAt: now,
  }
}

module.exports = {
  createUser
}