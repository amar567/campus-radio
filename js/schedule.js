  function schedule() {
    setTimeout(fadeFunc, 2000);
    setTimeout(clean, 5000);
  }

  function fadeFunc() {
    document.getElementById("id").style.transition = "2s";
    document.getElementById("id").style.opacity = "0";
  }

  function clean() {
    document.getElementById("id").style.display = "none";
  }
