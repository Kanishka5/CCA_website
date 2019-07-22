var dtl = document.getElementsByClassName("cell_details");

var scene = new ScrollMagic.Scene({
  triggerElement: "#anim",
  tweenChanges: true,
  offset: 200
});

var tl = new TimelineMax();
var tween1 = TweenMax.to("dtl", 2, { width: "70vw" });
var tween2 = TweenMax.to("dtl", 2, {
  height: "90vh",
  bottom: "-5vh"
});
tl.add(tween1).add(tween2);
scene.setTween(tl);
// scene.addIndicators({ name: "1 (duration: 0)" });
// scene.addTo(controller);

// var lastScrollTop = 0;
// var tl1 = new TimelineMax();
// var tl2 = new TimelineMax();

// $(window).scroll(() => {
//   var st = $(this).scrollTop();
//   if (st > lastScrollTop) {
//     console.log("scroll");
//     tl1.to(dtl, 2, { width: "70vw" }).to(dtl, 2, {
//       height: "90vh",
//       bottom: "-5vh"
//     });
//   } else {
//     tl2.to(dtl, 2, { height: "8vh", width: "50vw", bottom: 0 });
//   }
//   lastScrollTop = st;
// });
