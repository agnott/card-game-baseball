class Player{
  constructor(config){
    this.config = config;

    this.rand = new Random(this.config.seed);

    this.name = {
      first: 'Frjlbcipq',
      last: 'QqrttLiPBB'
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
      this.stats[k] = Math.floor(this.rand.triangular(0, 10, 5));
      this.overall += this.stats[k]/5;
    }

    this.rarity = {
      label: '',
      value: 0
    }

    //Give the card a rarity
    if(this.overall < 4.5){
      this.rarity.label = 'common';
      this.rarity.value = 0;
    }else if(this.overall < 5.25){
      this.rarity.label = 'rare';
      this.rarity.value = 1;
    }else if(this.overall < 6){
      this.rarity.label = 'epic';
      this.rarity.value = 2;
    }else{
      this.rarity.label = 'legendary';
      this.rarity.value = 3;
    }
  }
};
