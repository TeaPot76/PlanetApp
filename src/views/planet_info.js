const PubSub = require('../helpers/pub_sub.js');

const PlanetInfo = function(container){
  this.container = container;

};

PlanetInfo.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:planet-ready', (evt) => {
    const planetObject = evt.detail;
    this.render(planetObject);

  });
};

PlanetInfo.prototype.render = function(planet){
  this.container.innerHTML = '';

 const heading = this.createHeading(planet);
 const infoList = this.createInfoList(planet);
 const img = this.createImage(planet);

 this.container.appendChild(heading);
 this.container.appendChild(infoList);
 this.container.appendChild(img);
};

PlanetInfo.prototype.createHeading = function(planet){
  const heading = document.createElement('h2');
  heading.textContent = planet.name;
  return heading;
}

PlanetInfo.prototype.createImage = function(planet){
  const img = document.createElement('img');
  img.classList.add('medium-image');
  img.src = planet.image;
  return img;
};

PlanetInfo.prototype.createInfoList = function(planet) {
  const infoList = document.createElement('ul');

  constliDay = this.createLi(`Day: ${planet.day} Earth days`, infoList );
  const liSurfaceArea = this.createLi(
    `Surface Area: ${planet.surfaceArea} Earths`,
    infoList
  );
  const liVolume = this.createLi(`Volume: ${planet.volume} Earths`, infoList);
  const liGravity = this.createLi(`Gravity: ${planet.gravity}g`, infoList);
  const liMoons = this.createLi(`Moons: ${planet.moons}`, infoList);

  return infoList;

};

PlanetInfo.prototype.createLi = function(textContent, ul) {
  const li = document.createElement('li');
  li.textContent = textContent;
  ul.appendChild(li);
};


module.exports = PlanetInfo;
