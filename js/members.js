(function() {
  function init() {
    var speed = 250,
      easing = mina.easeinout;

    [].slice
      .call(document.querySelectorAll(".membercard > a"))
      .forEach(function(el) {
        var s = Snap(el.querySelector("svg")),
          path = s.select("path"),
          pathConfig = {
            from: path.attr("d"),
            to: el.getAttribute("data-path-hover")
          };

        el.addEventListener("mouseenter", function() {
          path.animate({ path: pathConfig.to }, speed, easing);
        });

        el.addEventListener("mouseleave", function() {
          path.animate({ path: pathConfig.from }, speed, easing);
        });
      });
  }

  init();
})();

// responsive menu

let menuIcon = document.querySelector(".menuIcon");
let nav = document.querySelector(".overlay-menu");

menuIcon.addEventListener("click", () => {
  if (nav.style.transform != "translateX(0%)") {
    nav.style.transform = "translateX(0%)";
    nav.style.transition = "transform 0.2s ease-out";
  } else {
    nav.style.transform = "translateX(-100%)";
    nav.style.transition = "transform 0.2s ease-out";
  }
});

// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector(".menuIcon");

toggleIcon.addEventListener("click", () => {
  if (toggleIcon.className != "menuIcon toggle") {
    toggleIcon.className += " toggle";
  } else {
    toggleIcon.className = "menuIcon";
  }
});

//loader

//onclick functions
function home() {
  loader = new SVGLoader(document.getElementById("loader"), { speedIn: 300 });
  let home = document.getElementById("home");
  let about = document.getElementById("about");
  let arhn = document.getElementById("arhn");
  let cells = document.getElementById("cells");
  let member = document.getElementById("team");
  let contact = document.getElementById("contact");
  let nav = document.querySelector(".overlay-menu");
  let toggleIcon = document.querySelector(".menuIcon");
  let logo = document.querySelector(".cca");
  let logoimg = document.getElementById("logoImg");
  logoimg.style.height = "150px";
  logo.style.top = "4vh";
  home.style.display = "block";
  about.style.display = "none";
  arhn.style.display = "none";
  cells.style.display = "none";
  member.style.display = "none";
  contact.style.display = "none";
  toggleIcon.className = "menuIcon";
  nav.style.transform = "translateX(-100%)";
  nav.style.transition = "transform 0.2s ease-out";
  loader.show();
  // after some time hide loader
  setTimeout(function() {
    loader.hide();
  }, 1000);
}

function abt() {
  loader = new SVGLoader(document.getElementById("loader"), { speedIn: 300 });
  let home = document.getElementById("home");
  let about = document.getElementById("about");
  let arhn = document.getElementById("arhn");
  let cells = document.getElementById("cells");
  let member = document.getElementById("team");
  let contact = document.getElementById("contact");
  let nav = document.querySelector(".overlay-menu");
  let toggleIcon = document.querySelector(".menuIcon");
  let logo = document.querySelector(".cca");
  let logoimg = document.getElementById("logoImg");
  logoimg.style.height = "55px";
  logo.style.top = "2%";
  home.style.display = "none";
  about.style.display = "block";
  arhn.style.display = "none";
  cells.style.display = "none";
  member.style.display = "none";
  contact.style.display = "none";
  toggleIcon.className = "menuIcon";
  nav.style.transform = "translateX(-100%)";
  nav.style.transition = "transform 0.2s ease-out";
  loader.show();
  // after some time hide loader
  setTimeout(function() {
    loader.hide();
  }, 1000);
}

function arhn() {
  loader = new SVGLoader(document.getElementById("loader"), { speedIn: 300 });
  let home = document.getElementById("home");
  let about = document.getElementById("about");
  let arhn = document.getElementById("arhn");
  let cells = document.getElementById("cells");
  let member = document.getElementById("team");
  let contact = document.getElementById("contact");
  let nav = document.querySelector(".overlay-menu");
  let toggleIcon = document.querySelector(".menuIcon");
  let logo = document.querySelector(".cca");
  let logoimg = document.getElementById("logoImg");
  logoimg.style.height = "55px";
  logo.style.top = "2%";
  home.style.display = "none";
  about.style.display = "none";
  arhn.style.display = "block";
  cells.style.display = "none";
  member.style.display = "none";
  contact.style.display = "none";
  toggleIcon.className = "menuIcon";
  nav.style.transform = "translateX(-100%)";
  nav.style.transition = "transform 0.2s ease-out";
  loader.show();
  // after some time hide loader
  setTimeout(function() {
    loader.hide();
  }, 1000);
}

function cells() {
  loader = new SVGLoader(document.getElementById("loader"), { speedIn: 300 });
  let home = document.getElementById("home");
  let about = document.getElementById("about");
  let arhn = document.getElementById("arhn");
  let cells = document.getElementById("cells");
  let member = document.getElementById("team");
  let contact = document.getElementById("contact");
  let nav = document.querySelector(".overlay-menu");
  let toggleIcon = document.querySelector(".menuIcon");
  let logo = document.querySelector(".cca");
  let logoimg = document.getElementById("logoImg");
  logoimg.style.height = "55px";
  logo.style.top = "2%";
  home.style.display = "none";
  about.style.display = "none";
  arhn.style.display = "none";
  cells.style.display = "block";
  member.style.display = "none";
  contact.style.display = "none";
  toggleIcon.className = "menuIcon";
  nav.style.transform = "translateX(-100%)";
  nav.style.transition = "transform 0.2s ease-out";
  loader.show();
  // after some time hide loader
  setTimeout(function() {
    loader.hide();
  }, 1000);
}

function members() {
  loader = new SVGLoader(document.getElementById("loader"), { speedIn: 300 });
  let home = document.getElementById("home");
  let about = document.getElementById("about");
  let arhn = document.getElementById("arhn");
  let cells = document.getElementById("cells");
  let member = document.getElementById("team");
  let contact = document.getElementById("contact");
  let nav = document.querySelector(".overlay-menu");
  let toggleIcon = document.querySelector(".menuIcon");
  let logo = document.querySelector(".cca");
  let logoimg = document.getElementById("logoImg");
  logoimg.style.height = "55px";
  logo.style.top = "2%";
  home.style.display = "none";
  about.style.display = "none";
  arhn.style.display = "none";
  cells.style.display = "none";
  member.style.display = "block";
  contact.style.display = "none";
  toggleIcon.className = "menuIcon";
  nav.style.transform = "translateX(-100%)";
  nav.style.transition = "transform 0.2s ease-out";
  loader.show();
  // after some time hide loader
  setTimeout(function() {
    loader.hide();
  }, 1000);
}

function contact() {
  loader = new SVGLoader(document.getElementById("loader"), { speedIn: 300 });
  let home = document.getElementById("home");
  let about = document.getElementById("about");
  let arhn = document.getElementById("arhn");
  let cells = document.getElementById("cells");
  let member = document.getElementById("team");
  let contact = document.getElementById("contact");
  let nav = document.querySelector(".overlay-menu");
  let toggleIcon = document.querySelector(".menuIcon");
  let logo = document.querySelector(".cca");
  let logoimg = document.getElementById("logoImg");
  logoimg.style.height = "55px";
  logo.style.top = "2%";
  home.style.display = "none";
  about.style.display = "none";
  arhn.style.display = "none";
  cells.style.display = "none";
  member.style.display = "none";
  contact.style.display = "block";
  toggleIcon.className = "menuIcon";
  nav.style.transform = "translateX(-100%)";
  nav.style.transition = "transform 0.2s ease-out";
  loader.show();
  // after some time hide loader
  setTimeout(function() {
    loader.hide();
  }, 1000);
}

wdct_egg = () => {
  loader = new SVGLoader(document.getElementById("loader"), { speedIn: 300 });
  loader.show();
  document.getElementById("wdct_egg").style.display = "block";
  // after some time hide loader
  setTimeout(function() {
    loader.hide();
  }, 1000);
};

close_wdct_egg = () => {
  loader = new SVGLoader(document.getElementById("loader"), { speedIn: 300 });
  document.getElementById("wdct_egg").style.display = "none";
  loader.show();
  // after some time hide loader
  setTimeout(function() {
    loader.hide();
  }, 1000);
};

//navbar hide
function hide() {
  $(".sidebar").toggleClass("hidebar");
}

//egg anim
var i = 0;
function myFunction() {
  if (i == 0) {
    $(".egg").toggleClass("eggVisible");
    i = 1;
  }
}

//cell hover
$("#core").hover(
  function() {
    $("#cell_name").html(
      "Core Cell&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    );
  },
  function() {
    $("#cell_name").html("");
  }
);

$("#wdct").hover(
  function() {
    $("#cell_name").html("Web, Design & Creative Team");
  },
  function() {
    $("#cell_name").html("");
  }
);

$("#robo").hover(
  function() {
    $("#cell_name").html(
      "Robo Cell&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    );
  },
  function() {
    $("#cell_name").html("");
  }
);

$("#ecell").hover(
  function() {
    $("#cell_name").html(
      "Entrepreneurship Cell&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    );
  },
  function() {
    $("#cell_name").html("");
  }
);

$("#rndi").hover(
  function() {
    $("#cell_name").html("Research & Development Cell&nbsp;&nbsp;&nbsp;");
  },
  function() {
    $("#cell_name").html("");
  }
);
