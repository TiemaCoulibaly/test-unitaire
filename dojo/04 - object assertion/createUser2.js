const { v4: uuidv4 } = require('uuid');

/**
 * 
 * @param {string} firstName 
 * @param {string} lastName
 */
function createUser2(firstName, lastName) {
  const now = new Date(Date.now)
  return {
    id: uuidv4(),
    firstName,
    lastName,
    fullName: firstName + ' ' + lastName,
    createdAt: now,
    metadata: {
      status: 200,
      body: {
        blabla : {}
      }
    }
  }
}

module.exports = {
  createUser2
}