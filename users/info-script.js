var myImage = new Image();
myImage.src = 'premium.jpg';

function verified(){
  var i = document.getElementById("verify").value;
  if(i === "s.javid1"){
    document.getElementById("main-stuff").innerHTML = "Showing Stats";
    /* defines user type either basic, pro, bronze, silver, gold, or platinum.*/document.getElementById("user-type").innerHTML = "PLATINUM";
  }
  else{
    document.getElementById("main-stuff").innerHTML = "Error!";
    document.getElementById("main-stuff").className = "error-div";
  }
}


