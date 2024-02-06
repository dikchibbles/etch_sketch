let main = document.querySelector(".main");
let container = document.querySelector(".container");

let changeBackgroundColor = (e) => {
  let selectedDiv = e.currentTarget;
  selectedDiv.style.backgroundColor = `rgb(${randomNumberUpTo255()}, ${randomNumberUpTo255()}, ${randomNumberUpTo255()})`;
};

let generateCustomGrid = (num) => {
  clearGrid();
  for (let i = 0; i < num; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("canvas-row");
    for (let i = 0; i < num; i++) {
      let rowItem = document.createElement("div");
      rowItem.classList.add("row-item");
      rowItem.addEventListener("mouseover", changeBackgroundColor);
      rowDiv.appendChild(rowItem);
    }
    main.appendChild(rowDiv);
  }
};

let randomNumberUpTo255 = () => {
  return Math.floor(Math.random() * 256);
};

let clearGrid = () => {
  main.innerHTML = "";
};

let createAndAddError = (text) => {
  let newDiv = document.createElement("div");
  newDiv.classList.add("row");
  let error = document.createElement("small");
  error.classList.add("text-danger");
  error.textContent = text;
  newDiv.appendChild(error);
  container.appendChild(newDiv);
};

let createRowBootstrap = (item) => {
  let newDiv = document.createElement("div");
  newDiv.classList.add("row", "text-danger", "mb-3", "error-row");
  newDiv.appendChild(item);
  container.appendChild(newDiv);
};

let changeErrorText = (value, error) => {
  if (value == "") {
    error.textContent = "Input can not be empty";
  } else if (value < 10) {
    error.textContent = "Should be more than 9";
  } else if (value > 100) {
    error.textContent = "Should be less than 101";
  }
};

let gridBtn = document.querySelector(".grid-btn");
let input = document.querySelector(".form-control");
gridBtn.addEventListener("click", () => {
  let finalValue = input.value.trim();
  let error = document.querySelector("small");
  if (!error) {
    error = document.createElement("small");
    changeErrorText(finalValue, error);
    createRowBootstrap(error);
  }
  changeErrorText(finalValue, error);
  if (finalValue >= 10 && finalValue <= 100) {
    if (error) {
      let errorRow = document.querySelector(".error-row");
      container.removeChild(errorRow);
    }
    generateCustomGrid(finalValue);
  }
});
