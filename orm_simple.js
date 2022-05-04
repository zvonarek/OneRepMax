$('button').click(function(){
    var TOLERANCE = 1;
    var weight = parseInt($('weight').val());
    var reps   = parseInt($('reps').val());
    var max = weight * (1 + (reps/30));
    var myDiv = document.getElementById('demo');
    myDiv.innerHTML = "You're good for  " + max.toFixed(TOLERANCE) + " next time.";
    //$("#demo").html("You're good for  " + max.toFixed(TOLERANCE) + " next time.");
});
