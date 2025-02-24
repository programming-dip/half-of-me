const parentElement = document.getElementById("parentElement");
const showMassage = document.getElementById("showMassage");
const changeColor = document.body.style;

yes = () => {
  parentElement.style.display = "none";
  showMessage.style.display = "block";
  changeColor.background =
    "linear-gradient(116.82deg, #ff94e7 0%, #27cbff 100%)";
};

let attempts = 0;
no = () => {
            const responseMessage = document.getElementById('responseMessage');
            const noButton = document.getElementById('noButton');
            
            if (attempts === 0) {
              responseMessage.innerHTML = "Try again babe, you pressed the wrong answer.";
          } else if (attempts === 1) {
              responseMessage.innerHTML = "Anwesha, where's your glasses 👓? As you pressed the wrong one again. Let's try again.";
          } else if (attempts === 2) {
              responseMessage.innerHTML = "One more time babe... You need help finding the right answer. Here's a hint 🤔: Starts with 'y' and ends with 'es'.";
          } else if (attempts === 3) {
              responseMessage.innerHTML = "It seems you're struggling. The correct answer is 'Yes'☺️.";
          }
          attempts++;

};

// Animate Text with Anim JS
var textWrapper = document.querySelector(".ml6 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml6 .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".ml6",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
