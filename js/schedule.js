  function schedule() {
    setTimeout(fadeFunc, 1000);
    setTimeout(clean, 3000);
  }

  function fadeFunc() {
    document.getElementById("id").style.transition = "2s";
    document.getElementById("id").style.opacity = "0";
  }

  function clean() {
    document.getElementById("id").style.display = "none";
  }
