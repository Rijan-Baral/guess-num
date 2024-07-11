let secretNum = Math.floor(Math.random() * 20 + 1);
// document.querySelector(".secretNumber").textContent = secretNum;
console.log(secretNum);

let score = 10;
let highscore = 0;
const popup = document.querySelector(".popup");
const popup2 = document.querySelector(".popup2");

const open = function () {
  popup.classList.remove("hidden");
  popup2.classList.remove("hidden");
};
const close = function () {
  popup.classList.add("hidden");
  popup2.classList.add("hidden");
};

const function1 = document
  .querySelector(".check")
  .addEventListener("click", function () {
    console.log(document.querySelector("input").value);
    const inputnumber = document.querySelector("input").value;
    if (score > 1) {
      if (!inputnumber) {
        document.querySelector(".guess").textContent = "😒 NO INPUT";
      } else if (inputnumber == secretNum) {
        if (highscore <= score) {
          highscore = score;
          document.querySelector(
            ".highscore"
          ).textContent = `🥳 HIGH SCORE=${highscore}`;
        }
        document.querySelector(".guess").textContent = "👌 CORRECT GUESS";
        document.querySelector(".secretNumber").textContent = secretNum;
        document.querySelector("body").style.backgroundColor = "#ff4b33";
        open();
        popup.addEventListener("click", close);
      } else if (inputnumber !== secretNum) {
        document.querySelector(".guess").textContent =
          inputnumber > secretNum ? "👆 TOO HIGH" : "👇 TOO LOW";
        score--;
        document.querySelector(".score").textContent = `😳 SCORE=${score}`;
      }
    } else {
      open();
      document.querySelector(".popup2 h5").textContent = "😒 GAME OVER..";
      document.querySelector(".guess").textContent = "😒 GAME OVER";
      document.querySelector(".score").textContent = `😳 SCORE=${0}`;
      document.querySelector(".secretNumber").textContent = secretNum;
    }
  });

document.querySelector(".again").addEventListener("click", function () {
  secretNum = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".guess").textContent = "🤔 START GUESSING...";
  score = 10;
  document.querySelector(".score").textContent = `😳 SCORE=${score}`;
  document.querySelector("input").value = "";
  document.querySelector(".secretNumber").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#1e1d1d";
  close();
});
