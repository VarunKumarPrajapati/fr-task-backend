const {
  getCountries,
  getStatesByCountry,
  getCitiesByState,
} = require("../services/locationService");

exports.getCountries = async (req, res) => {
  const countries = await getCountries();
  res.send(countries);
};

exports.getStatesByCountry = async (req, res) => {
  const states = await getStatesByCountry(req.params.countryId);
  res.send(states);
};

exports.getCitiesByState = async (req, res) => {
  const cities = await getCitiesByState(req.params.stateId);
  res.send(cities);
};
