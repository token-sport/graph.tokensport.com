const debug = require('debug')('graph.tokensport.com:controller');
const bcrypt = require('bcrypt');

/* MODELS */
const Staff = require('../../models/Staff');
const Country = require('../../models/Country');
const Tournament = require('../../models/Tournament');
const Team = require('../../models/Team');
const Match = require('../../models/Match');
const Player = require('../../models/Player');
const Dt = require('../../models/Dt');
const Referee = require('../../models/Referee');
const Event = require('../../models/Event');

/* UTILS */
const setDataToModel = require('../../utils/setDataToModel');

/**
 *
 * @author Steven Anaya <stvanayar@gmail.com>
 * @async
 * @param {Object} staffData
 * @returns {Object} - Returns staff saved object
 */
const createStaff = async staffData => {
  const passHash = await bcrypt.hash(staffData.password, 5);
  const newStaffData = {
    ...staffData,
    password: passHash
  }

  const newStaff = setDataToModel(Staff, newStaffData);

  try {
    const storedStaff = await newStaff.save();
    debug(`Staff ${storedStaff._id} saved`);
    return storedStaff;
  } catch (error) {
    debug(`Error: ${error}`);
    throw error;
  }
};

/**
 *
 * @author Steven Anaya <stvanayar@gmail.com>
 * @async
 * @param {Object} data
 * @returns {Object} - Returns the country created object
 */
const createCountry = async countryData => {
  const newCountry = setDataToModel(Country, countryData);

  try {
    const storedCountry = await newCountry.save();
    debug(`Country ${storedCountry.name} saved`);
    return storedCountry;
  } catch (error) {
    debug(`Error: ${error}`);
    throw error;
  }
};

/**
 *
 * @author Steven Anaya <stvanayar@gmail.>
 * @async
 * @param {Object} tournamentData
 * @returns {Object} - Returns the tournament saved object
 */
const createTournament = async tournamentData => {
  const newTournament = setDataToModel(Tournament, tournamentData);

  try {
    const storedTournament = await newTournament.save();
    debug(`Tournament ${storedTournament.name} saved`);
    return storedTournament;
  } catch (error) {
    debug(`Error: ${error}`);
    throw error;
  }
};

/**
 *
 * @author StevenAnaya <stvanayar@gmail.com>
 * @async
 * @param {Object} teamData
 * @returns {Object} - Returns the team saved object
 */
const createTeam = async teamData => {
  const newTeam = setDataToModel(Team, teamData);

  try {
    const storedTeam = await newTeam.save();
    debug(`Team ${storedTeam.name} saved`);
    return storedTeam;
  } catch (error) {
    debug(`Error: ${error}`);
  }
};

/**
 *
 * @author Steven Anaya <stvanayar@gmail.com>
 * @async
 * @param {Object} matchData
 * @returns {Object} - Returns the match saved object
 */
const createMatch = async matchData => {
  const newMatch = setDataToModel(Match, matchData);

  try {
    const storedMatch = await newMatch.save();
    debug(`Match ${storedMatch._id} saved`);
    return storedMatch;
  } catch (error) {
    debug(`Error: ${error}`);
    throw error;
  }
};

/**
 *
 * @author Steven Anaya <stvanayar@gmail.com>
 * @async
 * @param {Object} playerData
 * @returns {Object} - Returns the player saved object
 */
const createPlayer = async playerData => {
  const newPlayer = setDataToModel(Player, playerData);

  try {
    const storedPlayer = await newPlayer.save();
    debug(`Player ${storedPlayer._id} saved`);
    return storedPlayer;
  } catch (error) {
    debug(`Error: ${error}`);
    throw error;
  }
};

/**
 *
 * @author Steven Anaya <stvanayar@gmail.com>
 * @async
 * @param {Object} dtData
 * @returns {Object} - Returns DT saved object
 */
const createDt = async dtData => {
  const newDt = setDataToModel(Dt, dtData);

  try {
    const storedDt = await newDt.save();
    debug(`DT ${storedDt._id} saved`);
    return storedDt;
  } catch (error) {
    debug(`Error: ${error}`);
    throw error;
  }
}

/**
 *
 * @author Steven Anaya <stvanayar@gmail.com>
 * @async
 * @param {Object} refereeData
 * @returns {Object} - Returns the referee saved object
 */
const createReferee = async refereeData => {
  const newReferee = setDataToModel(Referee, refereeData);

  try {
    const storedReferee = await newReferee.save();
    debug(`Referee ${storedReferee._id} saved`);
    return storedReferee;
  } catch (error) {
    debug(`Error: ${error}`);
    throw error;
  }
};

/**
 *
 * @author StevenAnaya <stvanayar@gmail.com>
 * @async
 * @param {Object} eventData
 * @returns {Object} - Returns event saved object
 */
const createEvent = async eventData => {
  const newEvent = setDataToModel(Event, eventData);

  try {
    const storedEvent = await newEvent.save();
    debug(`Event ${storedEvent._id} saved`);
    return storedEvent;
  } catch (error) {
    debug(`Error: ${error}`);
    throw error;
  }
};

module.exports = {
  createStaff,
  createCountry,
  createTournament,
  createTeam,
  createMatch,
  createPlayer,
  createDt,
  createReferee,
  createEvent
};
