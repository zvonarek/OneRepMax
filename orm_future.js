(function(global){

'use strict';

var TOLERANCE = 2;

//Step 1) Create functions that will calculate the e1RM.
//Brzycki, Matt (1998). A Practical Approach To Strength Training.
//McGraw-Hill. ISBN 978-1-57028-018-4.
function brzycki(w, r){
  return Number((w*((36)/(37-r))).toFixed(TOLERANCE));
}
//Epley, Boyd (1985). "Poundage Chart". Boyd Epley Workout. Lincoln,
//NE: Body Enterprises. p. 86.
function epley(w, r){
  return Number((w*(1+(r/30))).toFixed(TOLERANCE));
}
function average(w, r){
  return Number((brzycki(w, r)+epley(w, r))/2).toFixed(TOLERANCE);
}

//Step 2) Use switch to choose formula
function chooseFormula(f){
  switch (f){
    case 'average':
      return average;
    case 'brzycki':
      return brzycki;
    case 'epley':
      return epley;
    default:
      console.warn('Formula does not exist, will default to average.');
      return average;
  }
}

//Step 3) Check that (w, r) is a valid pair
function check(w, r){
  return (Number(w)>0 && Number(r)<=8 && Number(r)>0);
}

//Step 4) Create function that calculates given choice of formula
function calc(f, w, r){
  if (check(w, r)){
    return chooseFormula(f)(w, r);
  }
  console.warn('Invalid entry: '+w+' lbs and/or '+r+' reps are invalid.');
  return -1;
}

//Step 5)
global.orm = global.orm || {}; //if var is und/false, initialize to empty obj.
global.orm.calc = function(f, w, r){
  return calc(f, w, r);
};

}).call(this, global)
