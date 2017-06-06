window.onload = function(){
  let P = new Player({
    seed: 234324
  });

  let S = new PlayerCard('player-1', 200, 300, P);

  let vals = {};
  for(let i=0; i<5000; i++){
    let Q = new Player({
      seed: i
    });

    if(Q.overall in vals){
      vals[Q.overall] += 1;
    }else{
      vals[Q.overall] = 1;
    }
  }
  console.log(vals);

  let str = '';
  for(let k in vals){
    str += `${k}\t${vals[k]}\n`;
  }
  console.log(str);
};
