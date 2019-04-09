const PubSub = require('../helpers/pub_sub.js');

const SelectPlanet = function(menu){
  this.menu = menu;
};

SelectPlanet.prototype.bindEvents = function(){
   this.menu.addEventListener('click', (evt) => {
    const selectedPlanetName = evt.target.id;
    PubSub.publish('SelectPlanet:selected', selectedPlanetName);
  });
};


module.exports = SelectPlanet;
