// function updateBone() {
//     const scrolledVW = window.scrollY;

//     const entranceBone = document.querySelector(".entranceBone");
//     const height = parseFloat(getComputedStyle(entranceBone).marginTop) + (window.innerWidth/100)*3;

//     console.log(height, scrolledVW);

//     const topBone = document.querySelector(".topBone");

//     if (scrolledVW >= height) {
//         topBone.style.cssText = `
//             position: absolute;
//             margin-top: ${height}px;
//         `;
//     } else {
//         topBone.style.cssText = `
//             position: fixed;
//             margin-top: 0;
//         `;
//     }
// }

// updateBone();
// window.addEventListener("scroll", updateBone);

const slides = document.querySelector(".slides");
let slide = 1;

setInterval(function () {
  if (slide == 1) {
    slides.style.cssText = `

      background-image: url("images/Examples/Golem.png");
    `;
  } else if (slide == 2) {
    slides.style.cssText = `

      background-image: url("images/Examples/Sculk.png");
    `;
  } else if (slide == 3) {
    slides.style.cssText = `

      background-image: url("images/Examples/Tree.png");
    `;
  } else {
    slides.style.cssText = `

      background-image: url("images/Examples/Placeholder.png");
    `;
    slide = 0;
  }

  slide += 1;
}, 3000);
