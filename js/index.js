// Your code goes here

const logoHeading = document.querySelector(".logo-heading");
const introImg = document.querySelector("header img");
const buttons = document.querySelectorAll(".btn");
const contentPick = document.querySelector(".content-pick");
const allImgs = document.querySelectorAll("img");

window.addEventListener("load", function(e) {
    console.log("All resources finished loading!");
  });

//Header Img: Appear when nav heading is moused over with a delay

logoHeading.addEventListener("mouseover", function() {
    setTimeout(() => {
      introImg.style.display="initial";
    }, 500);
});

// Buttons: Scale up on mouseenter, return to normal on mouseout

buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", function(e) {
        e.target.style.transform = "scale(1.2,1.2)";
        e.target.textContent = "Click for adventure";
    })
    btn.addEventListener("mouseout", function(e) {
        e.target.style.transform = "scale(1,1)";
        e.target.textContent = "Sign. Me. UP!";
    })
});

// Buttons: Create and show new p tag below when clicked

buttons.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        contentPick.style.flexWrap = "wrap";
        const newH1 = document.createElement('h1');
        newH1.textContent= "YOu Picked an option!";
        newH1.style.padding = "30px 0";
        newH1.style.margin = "0 auto";
        newH1.style.textAlign = "center";
        contentPick.appendChild(newH1);
        console.log(newH1);
      })
  })

  // Images: skew -15deg when double clicked

  allImgs.forEach((img) => {
      img.addEventListener("dblclick", function(e) {
          e.target.style.transform = "skewX(-15deg)";

    const newP = document.createElement("p");
    newP.textContent = "You picked Fun in The Sun!";
    contentPick.appendChild(newP);
  });
});
