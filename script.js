const calcBtn = document.querySelector(".calculateBtn");
const resetBtn = document.querySelector(".resetBtn");

calcBtn.addEventListener("click", function () {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();

  if (name1 === "" || name2 === "") {
    alert("please enter both names");
    return;
  }
  const loveCalculator = Math.trunc(Math.random() * 100) + 1;
  const outputDiv = document.querySelector(".output");
  if (loveCalculator === 100) {
    outputDiv.innerHTML = `${name1} and ${name2} have love score of ${loveCalculator} %❤️ 
    you both have strong relationship🎉❤️`;
    calcBtn.disabled = true;
  } else {
    outputDiv.innerHTML = `${name1} and ${name2} have love score of ${loveCalculator} %❤️`;
    calcBtn.disabled = true;
  }
});

resetBtn.addEventListener("click", function () {
  const outputDiv = document.querySelector(".output");
  outputDiv.innerHTML = "";
  calcBtn.disabled = false;
});
