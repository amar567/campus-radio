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

    function fivebk2normal() {
      if (document.getElementById("five").classList.contains("hover")) {
        document.getElementById("five").className = document.getElementById("five").className.replace(/\b hover\b/g, "");
        e-=1
      }
    }

    function sixbk2normal() {
      if (document.getElementById("six").classList.contains("hover")) {
        document.getElementById("six").className = document.getElementById("six").className.replace(/\b hover\b/g, "");
        f-=1
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
      twobk2normal(),threebk2normal(),fourbk2normal(),fivebk2normal(),sixbk2normal()
    }

    var b=2
    function rotatecard2() {
      if (b%2 == 0) {
        document.getElementById("two").className += " hover";
        b+=1
      }else {
        twobk2normal()
      }
      onebk2normal(),threebk2normal(),fourbk2normal(),fivebk2normal(),sixbk2normal()
    }

    var c=2
    function rotatecard3() {
      if (c%2 == 0) {
        document.getElementById("three").className += " hover";
        c+=1
      }else {
      threebk2normal()
      }
      onebk2normal(),twobk2normal(),fourbk2normal(),fivebk2normal(),sixbk2normal()
    }

    var d=2
    function rotatecard4() {
      if (d%2 == 0) {
        document.getElementById("four").className += " hover";
        d+=1
      }else {
      fourbk2normal()
      }
      onebk2normal(),twobk2normal(),threebk2normal(),fivebk2normal(),sixbk2normal()
    }

    var e=2
    function rotatecard5() {
      if (e%2 == 0) {
        document.getElementById("five").className += " hover";
        e+=1
      }else {
      fivebk2normal()
      }
      onebk2normal(),twobk2normal(),threebk2normal(),fourbk2normal(),sixbk2normal()
    }

    var f=2
    function rotatecard6() {
      if (f%2 == 0) {
        document.getElementById("six").className += " hover";
        f+=1
      }else {
      sixbk2normal()
      }
      onebk2normal(),twobk2normal(),threebk2normal(),fourbk2normal().fivebk2normal()
    }


    /*flips all back to front*/
    function bk2normal() {
      onebk2normal(),twobk2normal(),threebk2normal(),fourbk2normal(),fivebk2normal(),sixbk2normal()
    }
