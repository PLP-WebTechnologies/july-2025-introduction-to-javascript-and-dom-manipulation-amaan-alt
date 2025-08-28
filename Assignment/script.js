// ===============================
// PART 1: VARIABLES & CONDITIONALS
// ===============================

// Capture DOM elements
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const greeting = document.getElementById("greeting");

// Event listener for greeting button
greetBtn.addEventListener("click", () => {
  let userName = nameInput.value; // variable declaration

  if (userName) {
    greeting.textContent = `Hello, ${userName}! 👋`; // dynamic DOM update
  } else {
    greeting.textContent = "Please enter your name!";
  }
});

// ===============================
// PART 2: FUNCTIONS
// ===============================

// Custom function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

const sumBtn = document.getElementById("sumBtn");
const sumResult = document.getElementById("sumResult");

sumBtn.addEventListener("click", () => {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  if (!isNaN(num1) && !isNaN(num2)) {
    sumResult.textContent = `Sum = ${addNumbers(num1, num2)}`;
  } else {
    sumResult.textContent = "Please enter valid numbers!";
  }
});

// ===============================
// PART 3: LOOPS
// ===============================

const fruits = ["Apple", "Banana", "Mango", "Orange"];
const fruitList = document.getElementById("fruitList");

// Loop through array and display fruits
fruits.forEach((fruit) => {
  let li = document.createElement("li");
  li.textContent = fruit;
  fruitList.appendChild(li);
});

// ===============================
// PART 4: DOM MANIPULATION
// ===============================

const colorBtn = document.getElementById("colorBtn");
const addItemBtn = document.getElementById("addItemBtn");
const dynamicList = document.getElementById("dynamicList");

// Change background color on click
colorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});

// Add a new item to the list dynamically
addItemBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `New Item ${dynamicList.children.length + 1}`;
  dynamicList.appendChild(newItem);
});
