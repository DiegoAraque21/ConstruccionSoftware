// EXERCISE  1
document
  .querySelector("body")
  .addEventListener("mousemove", (mousePosition) => {
    document.querySelector(
      "#mousePosition"
    ).textContent = `Posicion del Mouse: X-axis: ${mousePosition.clientX}, Y-axis: ${mousePosition.clientY}`;
  });

// EXERCISE 2

function getFormvalue(event) {
  event.preventDefault();
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let nameTag = document.createElement("p");
  let completeName = document.createTextNode(`${firstName} ${lastName}`);
  nameTag.appendChild(completeName);
  let divExcercise2 = document.getElementById("ej2");
  divExcercise2.appendChild(nameTag);
}

// EXERCISE 3
function insertRow(event) {
  event.preventDefault();
  let table = document.getElementById("sampleTable");
  let tr = document.createElement("tr");
  for (let i = 0; i < table.rows[0].cells.length; i++) {
    let td = document.createElement("td");
    let text = document.createTextNode(
      `row ${table.rows.length + 1} column ${i + 1}`
    );
    td.appendChild(text);
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
function insertColumn(event) {
  event.preventDefault();
  let table = document.getElementById("sampleTable");
  let numCol = table.rows[0].cells.length;
  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    let td = document.createElement("td");
    let text = document.createTextNode(`row ${i + 1} column ${numCol + 1}`);
    td.appendChild(text);
    row.appendChild(td);
  }
  table.appendChild(tr);
}

// EXERCISE 4
function addElement() {
  let ej4 = document.querySelector("#form2");

  let rowInput = document.createElement("input");

  rowInput.type = "text";
  rowInput.id = "rowNum";
  rowInput.value = "Insert row number";

  let colInput = document.createElement("input");
  colInput.type = "text";
  colInput.id = "colNum";
  colInput.value = "Insert column number";

  let textInput = document.createElement("input");
  textInput.type = "text";
  textInput.id = "textValue";
  textInput.value = "Insert a text";
  ej4.appendChild(rowInput);
  ej4.appendChild(colInput);
  ej4.appendChild(textInput);
}
addElement();

function changeContent(event) {
  event.preventDefault();
  let table = document.getElementById("myTable");
  let col = Number(document.querySelector("#colNum").value);
  let row = Number(document.querySelector("#rowNum").value);
  let text = document.querySelector("#textValue").value;
  table.rows[row].children[col].textContent = text;
}
// EXERCISE 5

function addColor(event) {
  event.preventDefault();
  let select = document.querySelector("#colorSelect");
  let colorsArr = ["Yellow", "Magenta", "Pink", "Blue", "Grey"];
  const color = Math.floor(Math.random() * colorsArr.length);
  let option = document.createElement("option");
  let colorName = document.createTextNode(colorsArr[color]);
  option.appendChild(colorName);
  select.appendChild(option);
}

// EXERCISE 6

function mouseImage() {
  const width = Math.trunc(Math.random() * (600 - 301)) + 300;
  const height = Math.trunc(Math.random() * (600 - 301)) + 300;
  document.querySelector("img").style.width = width + "px";
  document.querySelector("img").style.height = height + "px";
}
