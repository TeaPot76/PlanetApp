const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectPlanet = require('./views/select_planet.js');
const PlanetInfo = require('./views/planet_info.js');

document.addEventListener('DOMContentLoaded', () => {
const planetsDataModel = new SolarSystem(planetsData);
planetsDataModel.bindEvents();

const menu = document.querySelector('nav.planets-menu');
const menuView = new SelectPlanet(menu);
menuView.bindEvents();

const detailContainer = document.querySelector('section.planet-details')
const planetInfoDisplay = new PlanetInfo(detailContainer);
planetInfoDisplay.bindEvents();

});
