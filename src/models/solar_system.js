const PubSub = require('../helpers/pub_sub.js');
const planets = require('../data/planets.js');


const SolarSystem = function(planets) {
  this.planets = planets;
};

  SolarSystem.prototype.bindEvents = function() {
  PubSub.subscribe('SelectPlanet:selected', (evt) => {
  const planetSelectedName = evt.detail;
  const selectedPlanetObject = this.findByName(planetSelectedName);
  PubSub.publish('SolarSystem:planet-ready', selectedPlanetObject)
});
};

SolarSystem.prototype.findByName = function(name){
  const foundPlanet = this.planets.find((currentPlanet) => {
    return currentPlanet.name === name;
  });
  return foundPlanet;
};





module.exports = SolarSystem;
