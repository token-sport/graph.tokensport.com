const Match = require('../../models/Match');

/**
 *
 * @author Steven Anaya <stvanayar@gmail.com>
 * @async
 * @returns {Object} - Returns the object with all the matches
 */
const getAllMatches = async () => {
  try {
    const resultMatches = await Match.find({}).exec();
    return resultMatches;
  } catch (error) {
    debug(`Error: ${error}`);
    throw error;
  }
};

const getMatches = async query => {
  console.log(query);
}

module.exports = {
  getAllMatches,
  getMatches
};
