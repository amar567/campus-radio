  /*flips acard back to front*/
    function onebk2normal() {
      if (document.getElementById("one").classList.contains("hover")) {
        document.getElementById("one").className = document.getElementById("one").className.replace(/\b hover\b/g, "");
        a-=1
      }
    }

    function twobk2normal() {
      if (document.getElementById("two").classList.contains("hover"))  {
        document.getElementById("two").className = document.getElementById("two").className.replace(/\b hover\b/g, "");
        b-=1
      }
    }

    function threebk2normal() {
      if (document.getElementById("three").classList.contains("hover")) {
        document.getElementById("three").className = document.getElementById("three").className.replace(/\b hover\b/g, "");
        c-=1
      }
    }

    function fourbk2normal() {
      if (document.getElementById("four").classList.contains("hover")) {
        document.getElementById("four").className = document.getElementById("four").className.replace(/\b hover\b/g, "");
        d-=1
      }
    }

    /*flips card one based on initial condition also resets all others to front*/
    var a=2
    function rotatecard1() {
      if (a%2 == 0) {
        document.getElementById("one").className += " hover";
        a+=1
      }else {
        onebk2normal()
      }
      twobk2normal(),threebk2normal(),fourbk2normal()
    }

    var b=2
    function rotatecard2() {
      if (b%2 == 0) {
        document.getElementById("two").className += " hover";
        b+=1
      }else {
        twobk2normal()
      }
      onebk2normal(),threebk2normal(),fourbk2normal()
    }

    var c=2
    function rotatecard3() {
      if (c%2 == 0) {
        document.getElementById("three").className += " hover";
        c+=1
      }else {
      threebk2normal()
      }
      onebk2normal(),twobk2normal(),fourbk2normal()
    }

    var d=2
    function rotatecard4() {
      if (d%2 == 0) {
        document.getElementById("four").className += " hover";
        d+=1
      }else {
      fourbk2normal()
      }
      onebk2normal(),twobk2normal(),threebk2normal()
    }


    /*flips all back to front*/
    function bk2normal() {
      onebk2normal(),twobk2normal(),threebk2normal(),fourbk2normal()
    }
