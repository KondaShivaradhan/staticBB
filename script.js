function myFunction() {
  small();
}

function small() {
  $("#ntext").hide().css({
    opacity: "1",
  });
  $("#navi").animate(
    {
      backgroundColor: "linear-gradient(145deg,white,black,white)",
    },
    1000
  );
  // document.getElementById('scrolldiv').style.display = 'none';
  document.getElementById("small").style.display = "flex";
  document.getElementById("svg").style.cssText =
    "height:0%; width:0%;transition:all 0.3s";
  document.getElementById("rot").style.transition = "all 0.5s";
  document.getElementById("navi").style.height = "70px";
  document.getElementById("rot").style.transform = "rotate(" + 90 + "deg)";
}

function big() {
  console.log("big called");
  // document.getElementById('scrolldiv').style.display = '';
  document.getElementById("small").style.display = "none";
  document.getElementById("svg").style.cssText = "height:50%; width:50%;";
  $("#ntext").show();
  document.getElementById("navi").style.height = "100%";
  document.getElementById("rot").style.transform = "rotate(" + 270 + "deg)";
}

function navi() {
  if (document.getElementById("navi").offsetHeight == "70") {
    big();
  } else {
    small();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Your code using document.getElementById here

  const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2"),
  };
  console.log(elts);
  const texts = [
    "Developer 👩‍💻",
    "Gamer 🎮",
    "Content Creator 🎥",
    "Blogger 📝",
    // `<canvas id="canvas" width="500" height="500"></canvas> <script src="https://unpkg.com/@rive-app/canvas@2.7.0"></script><script>
    //   const r = new rive.Rive({
    //     src: "https://cdn.rive.app/animations/vehicles.riv",
    //     canvas: document.getElementById("canvas"),
    //     autoplay: true,
    //     stateMachines: "bumpy",
    //     onLoad: () => {
    //       r.resizeDrawingSurfaceToCanvas();
    //     },
    //   });
    // </script>`,
    `<span class="sm:text-4xl text-3xl lg:text-4xl">That's</span> <br> Blazing Bane`,
    `<svg class="h-28 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 765 765"><defs><style>.cls-1{fill:#111;}.cls-2{fill:none;}</style></defs><title>logo</title><g id="cicle"><path class="cls-1" d="M1279.5,338C1068.25,338,897,509.25,897,720.5S1068.25,1103,1279.5,1103,1662,931.75,1662,720.5,1490.75,338,1279.5,338Zm-.36,736.16c-195.12,0-353.3-158.18-353.3-353.3s158.18-353.3,353.3-353.3,353.3,158.18,353.3,353.3S1474.26,1074.16,1279.14,1074.16Z" transform="translate(-897 -338)"/></g><g id="left"><path class="cls-2" d="M1153.52,681.37a68.85,68.85,0,1,0,68.85,68.85A68.61,68.61,0,0,0,1153.52,681.37Z" transform="translate(-897 -338)"/><path id="left_rect" data-name="left rect" class="cls-1" d="M1084.21,660.47V578.1h-43.86v165A113.24,113.24,0,0,1,1084.21,660.47Z" transform="translate(-897 -338)"/><path id="left_circle" data-name="left circle" class="cls-1" d="M1153.52,636.82a113.4,113.4,0,0,0-113.17,106.26c-.14,2.36-.23,4.74-.23,7.14a113.4,113.4,0,1,0,113.4-113.4Zm0,182.25a68.85,68.85,0,1,1,68.85-68.85A68.85,68.85,0,0,1,1153.52,819.07Z" transform="translate(-897 -338)"/></g><g id="right"><circle class="cls-2" cx="1405.56" cy="750" r="68.85" transform="translate(-1015.65 875.55) rotate(-45)"/><path id="right_rect" data-name="right rect" class="cls-1" d="M1336,660.47V578.1h-43.86v165A113.21,113.21,0,0,1,1336,660.47Z" transform="translate(-897 -338)"/><path id="right_cirle" data-name="right cirle" class="cls-1" d="M1405.32,636.82a113.4,113.4,0,0,0-113.17,106.26q-.23,3.54-.23,7.14a113.4,113.4,0,1,0,113.4-113.4Zm.24,182A68.85,68.85,0,1,1,1474.41,750,68.85,68.85,0,0,1,1405.56,818.85Z" transform="translate(-897 -338)"/></g></svg>`,
  ];

  const morphTime = 1.2;
  const cooldownTime = 0.75;

  let textIndex = texts.length - 1;
  let time = new Date();
  let morph = 0;
  let cooldown = cooldownTime;
  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];

  function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;
    if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
    }

    setMorph(fraction);
  }

  function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.innerHTML = texts[textIndex % texts.length];
    elts.text2.innerHTML = texts[(textIndex + 1) % texts.length];
  }

  function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
  }

  function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
      if (shouldIncrementIndex) {
        textIndex++;
      }

      doMorph();
    } else {
      doCooldown();
    }
  }

  animate();
});
