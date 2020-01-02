if (screen.width > 600) {
  document.getElementById("bod").addEventListener("wheel", anim);
}

function anim() {
  var tl = new TimelineMax();
  tl.to("#anim", 1, { width: "80vw" }).to("#anim", 1.5, {
    // overflowY: "scroll",
    height: "auto",
    top: "45vh",
    bottom: "auto"
  });
}

//meber hover anim
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

// $(window).on("wheel", function(e) {
//   var delta = e.originalEvent.deltaY;

//   if (delta > 0) {
//     var tl = new TimelineMax();
//     tl.to("#anim", 1, { width: "80vw" }).to("#anim", 1, {
//       height: "55vh",
//       overflow: "scroll"
//     });
//   } else {
//     var tl = new TimelineMax();
//     tl.to("#anim", 1, {
//       height: "7vh"
//     }).to("#anim", 1, { width: "50vw", overflow: "hidden" });
//   }

//   return false;
// });
