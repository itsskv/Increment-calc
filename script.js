function multiplyBy() {
  num1 = parseInt(document.getElementById("Newctc").value);
  num2 = parseInt(document.getElementById("Oldctc").value);
  num3 = (((num1 - num2) / num2) * 100).toFixed(2);
  num7 = num1 - num2;

  if (isNaN(num3)) {
    alert("Please enter the CTC Values!!!");
    return;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Increased ${num3}% And Increment: ${num7} `;
  }
}

function divideBy() {
  num2 = parseInt(document.getElementById("Oldctc").value);

  num4 = Number(document.getElementById("percentage").value);
  num5 = ((num2 * num4) / 100 + num2).toFixed(0);
  num6 = ((num2 * num4) / 100).toFixed(0);
  if (isNaN(num5)) {
    alert("Please enter the CTC & Percentage Values!!!");
    return;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `New CTC: ${num5} And Increment: ${num6}  `;
  }
}

function Clear() {
  num1 = parseInt((document.getElementById("Newctc").value = ""));
  num2 = parseInt((document.getElementById("Oldctc").value = ""));
  num4 = parseInt((document.getElementById("percentage").value = ""));
  document.getElementById("result").innerHTML = "";
}
