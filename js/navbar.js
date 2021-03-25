// setInterval(function(){
//     if (window.innerWidth>768) {
//       document.getElementById("nb-ul").style.left = (window.innerWidth - 600)+"px";
//     }
//     else {
//       document.getElementById("nb-ul").style.left = (0)+"px";
//     }
//   },200)

  function darken() {
    if (window.innerWidth<768) {
      document.getElementById("e4").classList.toggle("initial");
      document.getElementById("e4").classList.toggle("final");
  }
}

window.onresize = () => {
  if (window.innerWidth>768){
    document.getElementById("nb-ul").style.left = (window.innerWidth - 600)+"px";
  }
  else {
    document.getElementById("nb-ul").style.left = (0)+"px";
  }
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("e4").style.top = "0";
  } else {
    document.getElementById("e4").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
  if (document.getElementById("e4").classList.contains("final")) {
    $('#cnb').click();
  }
}
