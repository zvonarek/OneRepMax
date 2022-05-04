function ORM(){
  res = calcORM();
  instructPlates(res);
  return;
};

function reset() {
    document.getElementById('reps').value = '';
    document.getElementById('weight').value = '';
    document.getElementById("demoORM").innerHTML= "";
    for (let i=0; i<numPlates.length; i++) {
      var typePlates = [45,25,10,5,2.5];
      var id = "demo" + typePlates[i];
      document.getElementById(String(id)).innerHTML="";
    };
};

function calcORM(){
  var TOLERANCE = 1;
  var r = Number(document.getElementById("reps").value);
  var w = Number(document.getElementById("weight").value);
  var maxEpley = Number((w*(1+(r/30))).toFixed(TOLERANCE));
  var maxBrzycki = Number((w*((36)/(37-r))).toFixed(TOLERANCE));
  var maxAVG = Number(((maxEpley + maxBrzycki)/2).toFixed(TOLERANCE));
  var res = 5*Math.trunc(maxAVG/5);
  return res;
};

function instructPlates(res){
  var bar = 45;
  var num45 = 0;
  var num25 = 0;
  var num10 = 0;
  var num5 = 0;
  var num2point5 = 0;
  var trueWeight = res - bar;
  var temp = trueWeight;
  while (temp > 0) {
    num45 += Math.floor(temp/90);
    temp -= num45*90;
    num25 += Math.floor(temp/50);
    temp -= num25*50;
    num10 += Math.floor(temp/20);
    temp -= num10*20;
    num5 += Math.floor(temp/10);
    temp -= num5*10;
    num2point5 += Math.floor(temp/5);
    temp -= num2point5*5;
    numPlates = [num45,num25,num10,num5,num2point5];
  }
  var typePlates = [45,25,10,5,2.5];
  document.getElementById("demoORM").innerHTML="You're good for  " +res+ " lbs next time. On each side you'll need:";
  for (let i=0; i<numPlates.length; i++) {
    if (numPlates[i] == 0) { continue;}
    var id = "demo" + typePlates[i];
    document.getElementById(String(id)).innerHTML="x"+ numPlates[i] + " " + typePlates[i] + " lb plate(s).";
  }
  return;
};
