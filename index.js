const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");

const body = document.querySelector("body");

red.addEventListener("change", () => {
    body.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
    num1.value = red.value;
});
green.addEventListener("change", () => {
    body.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
    num2.value = green.value;
});
blue.addEventListener("change", () => {
    body.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
    num3.value = blue.value;
});

red.addEventListener("input", () => {
    num1.value = red.value;
});
green.addEventListener("input", () => {
    num2.value = green.value;
});
blue.addEventListener("input", () => {
    num3.value = blue.value;
});
