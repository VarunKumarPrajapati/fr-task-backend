const Country = require("../models/Country");
const State = require("../models/State");
const City = require("../models/City");

exports.getCountries = async () => {
  return await Country.find({});
};

exports.getStatesByCountry = async (countryId) => {
  return await State.find({ country: countryId });
};

exports.getCitiesByState = async (stateId) => {
  return await City.find({ state: stateId });
};
