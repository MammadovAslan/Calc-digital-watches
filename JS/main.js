const result = document.querySelector("#result");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    switch (event.target.innerText) {
      case "Del":
        if (result.innerText) {
          result.innerText = result.innerText.slice(0, -1);
        }
        break;
      case "C":
        result.innerText = "";
        break;
      case "=":
        result.innerHTML = eval(result.innerHTML);
        break;
      default:
        result.innerText += event.target.innerText;
    }
  });
});

document.addEventListener("keydown", function (event) {
  if (
    isFinite(event.key) ||
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/"
  ) {
    result.innerText += event.key;
  }
  if (event.key === "Backspace") {
    result.innerText = result.innerText.slice(0, -1);
  }

  if (event.key === "Enter") {
    result.innerHTML = eval(result.innerHTML);
  }

  if (event.key === "c") {
    result.innerHTML = "";
  }
});

const timer = document.querySelector("#watch");

setInterval(function () {
  const date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();

  if (seconds <= 9) {
    seconds == 0 ? (seconds = "00") : (seconds = "0" + seconds);
  }

  if (minutes <= 9) {
    minutes == 0 ? (minutes = "00") : (minutes = "0" + minutes);
  }

  if (hours <= 9) {
    hours == 0 ? (hours = "00") : (hours = "0" + hours);
  }
  timer.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);
