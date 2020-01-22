// Your code goes here

const logoHeading = document.querySelector(".logo-heading");
const introImg = document.querySelector("header img");
const buttons = document.querySelectorAll(".btn");
const contentPick = document.querySelector(".content-pick");

window.addEventListener("load", function(e) {
    console.log("All resources finished loading!");
  });

logoHeading.addEventListener("mouseover", function() {
    introImg.style.display = "initial";
})
buttons.forEach((btn) => {
    btn.addEventListener("mouseover", function(e) {
        e.target.style.transform = "scale(1.2,1.2)";
        e.target.textContent = "Click for adventure";
    })
    // btn.removeEventListener("mouseover", function(e) {
    //     e.target.style.transform = "scale(1.2,1.2)";
    // })
});
