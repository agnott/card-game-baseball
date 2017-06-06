class PlayerCard{
  constructor(dest, width, height, player){
    this.width  = width;
    this.height = height;

    this.svg = SVG(dest).viewbox(0, 0, width, height);

    //Give a background based on rarity
    let bgPattern = this.svg.pattern(width, height, function(add){
      let color = 
    });

    this.svg.rect(width-10, height-10).attr({
      x: 5, y: 5, rx: 5, ry: 5,
      fill: 'rgb(255,255,255)',
      stroke: 'black', 'stroke-width': 2
    });

    let infoGroup = this.svg.group();
    infoGroup.line(5,height-60,width-5,height-60).attr({
      stroke: 'black',
      'stroke-width': 2
    });

    infoGroup.text(function(add){
      add.tspan(player.name.first);
    }).attr({
      x: 10, y: height-42.5,
      fill: 'black',
      'font-family': "'Roboto', sans-serif"
    });
    console.log(infoGroup.text(function(add){
      add.tspan(player.name.last);
    }).attr({
      x: 10, y: height-15,
      fill: 'black',
    }).font({
      family: "'Roboto', sans-serif",
      size: 30,
      weight: 'bold'
    }).bbox())
  }
}
