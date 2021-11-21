var object_8 = document.querySelector('.header_objects_8');
anime({
  targets: object_8,
  translateX: 330,
  translateY: 330,
  delay: 400
});
var object_17 = document.querySelector('.header_objects_17');
anime({
  targets: object_17,
  translateX: -270,
  translateY: -270,
  delay: 400

});
var object_7 = document.querySelector('.header_objects_7');
anime({
  targets: object_7,
  translateX: 1540,
  translateY: -1540,
  rotateZ: -90,
  delay: 400
});
var object_6 = document.querySelector('.header_objects_6');
anime({
  targets: object_6,
  translateX: -270,
  translateY: +270,
  delay: 400
});
var object_3 = document.querySelector('.header_objects_3');
anime({
  targets: object_3,
  translateX: 370,
  translateY: 370,
  delay: 400
});
var object_1 = document.querySelector('.header_objects_1');
anime({
  targets: object_1,
  translateX: 370,
  translateY: 370,
  delay: 400
});
var object_4 = document.querySelector('.header_objects_4');
anime({
  targets: object_4,

  translateX: 370,
  translateY: 370,
  delay: 400
});
var object_16 = document.querySelector('.header_objects_16');
anime({
  targets: object_16,
  rotateZ: -180,
  translateY: 270,
  delay: 400
});
var object_9 = document.querySelector('.header_objects_9');
anime({
  targets: object_9,
  translateX: 540,
  delay: 400
});
var object_14 = document.querySelector('.header_objects_14');
anime({
  targets: object_14,
  translateX: -1600,
  delay: 400
});
var object_5 = document.querySelector('.header_objects_5');
anime({
  targets: object_5,
  translateY: +270,
  delay: 400
});
var object_10 = document.querySelector('.header_objects_10');
anime({
  targets: object_10,
  translateX: +270,
  delay: 400
});
var object_11 = document.querySelector('.header_objects_11');
anime({
  targets: object_11,
  translateX: +270,
  delay: 400
});
var object_12 = document.querySelector('.header_objects_12');
anime({
  targets: object_12,
  translateY: -540,
  delay: 400
});
var object_13 = document.querySelector('.header_objects_13');
anime({
  targets: object_13,
  translateY: -540,
  delay: 400
});
var object_15 = document.querySelector('.header_objects_15');
anime({
  targets: object_15,
  translateX: -540,
  delay: 400
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({})
  .add({
    targets: '.ml13 .letter',
    translateY: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 600 + 30 * i
  });

var textWrapper2 = document.querySelector('.ml14');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({})
  .add({
    targets: '.ml14 .letter',
    translateY: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 1000 + 50 * i
  });