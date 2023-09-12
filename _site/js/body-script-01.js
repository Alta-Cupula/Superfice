var init = function(){


  var isMobile = navigator.userAgent &&
    navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
  var isSmall = window.innerWidth < 1000;
  
  var ps = new ParticleSlider({
    ptlGap: isMobile || isSmall ? 3 : 0,
    ptlSize: isMobile || isSmall ? 3 : 1,
    width: 700,
    height: 200,
    monochrome: true
  });
    
  // var gui = new dat.GUI();
  // gui.add(ps, 'ptlGap').min(0).max(5).step(1).onChange(function(){
  //   ps.init(true);
  // });
  // gui.add(ps, 'ptlSize').min(1).max(5).step(1).onChange(function(){
  //   ps.init(true);
  // });
  // gui.add(ps, 'restless');
  // gui.addColor(ps, 'color').onChange(function(value){
  //   ps.monochrome = true;
  //   ps.setColor(value);
  //     ps.init(true);
  // });


  
  // (window.addEventListener
  //  ? window.addEventListener('click', function(){ps.init(true)}, false)
  //  : window.onclick = function(){ps.init(true)});
}


// if (document.readyState === "complete" || document.readyState === "interactive") {
//   // call on next available tick
//   // setTimeout(fn, 1);
//   init();
// }

// function docReady(fn) {
//   // see if DOM is already available
//   if (document.readyState === "complete" || document.readyState === "interactive") {
//       // call on next available tick
//        setTimeout(fn, 1);

//   } else {
//       document.addEventListener("DOMContentLoaded", fn);
//   }
// }   

init();
// $('document').ready(function(){})

// docReady(function() {
//   // DOM is loaded and ready for manipulation here
//   init();
// });
