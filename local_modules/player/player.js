let Random = require('../random/random.js');

class Player{
  constructor(config){
    this.config = config;

    let rand = new Random.generator(this.config.seed);

    this.name = {
      first: 'Filibuster',
      last: 'McDonaldsonman'
    };

    this.physical = {};

    this.stats = {
      'SPD': 0,
      'POW': 0,
      'CON': 0,
      'PTC': 0,
      'FLD': 0
    };
    this.overall = 0;

    //Generate stats and overalls
    for( let k in this.stats){
      this.stats[k] = Math.floor(rand.triangular(0, 10, 5));
      this.overall += this.stats[k]/5;
    }

    this.rarity = {
      label: '',
      value: 0
    };

    //Give the card a rarity
    let rarityLabels = ['common', 'rare', 'epic', 'legendary'];
    if(this.overall < 4.75){
      this.rarity.value = 0;
    }else if(this.overall < 5.5){
      this.rarity.value = 1;
    }else if(this.overall < 6.25){
      this.rarity.value = 2;
    }else{
      this.rarity.value = 3;
    }
    this.rarity.label = rarityLabels[this.rarity.value];
  }
};

module.exports = {
  newPlayer: function(seed){
    return new Player({
      seed: seed
    });
  }
};
