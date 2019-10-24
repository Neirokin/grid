//Создание таблицы
function getRandom() {
  return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

let table = document.createElement('table');
grid.prepend(table);
for (let i = 0; i < 50; i++) {
  let tr = document.createElement('tr');
  table.append(tr);
  for (let i = 0; i < 50; i++) {
    let td = document.createElement('td');
    td.innerHTML = getRandom();
    tr.append(td); 
  }
}

//Функционал
function colorCells(color, radius, numberOfCells, y, x) {
 
  let cells = radius;
  for (let i = 0; i < numberOfCells; i++) {
  //Закрашивает яейки сверху и снизу + решает баг боковых ячеек
    try {
      try {
        table.rows[y + radius].cells[x + cells].style.backgroundColor = color;
      }
      catch {
        table.rows[y - radius].cells[x - cells].style.backgroundColor = color;
      }
      try {
        table.rows[y - radius].cells[x - cells].style.backgroundColor = color;
      }
      catch {
        table.rows[y + radius].cells[x + cells].style.backgroundColor = color;
      }
    }
    //Решает баг угловых ячеек
    catch {
      try {
        table.rows[y - radius].cells[x + cells].style.backgroundColor = color;
      }
      catch {
        table.rows[y + radius].cells[x - cells].style.backgroundColor = color;
      }
      try {
        table.rows[y + radius].cells[x - cells].style.backgroundColor = color;
      }
      catch {
        table.rows[y - radius].cells[x + cells].style.backgroundColor = color;
      }
    }  
  //Закрашивает ячейки слева и справа + решает баг боковых ячеек
    try {
      try {
        table.rows[y + cells].cells[x + radius].style.backgroundColor = color;
      }
      catch {
        table.rows[y - cells].cells[x - radius].style.backgroundColor = color;
      }
      try {
         table.rows[y - cells].cells[x - radius].style.backgroundColor = color;
      }
      catch {
        table.rows[y + cells].cells[x + radius].style.backgroundColor = color;
      }
    }
    //Решает баг угловых ячеек
    catch {
      try {
        table.rows[y - cells].cells[x + radius].style.backgroundColor = color;
      }
      catch {
        table.rows[y + cells].cells[x - radius].style.backgroundColor = color;
      }
      try {
         table.rows[y + cells].cells[x - radius].style.backgroundColor = color;
      }
      catch {
        table.rows[y - cells].cells[x + radius].style.backgroundColor = color;
      }
    }
      
    cells--;
  }
}
  

let cell = document.getElementsByTagName('td');
for (let y = 0; y < 50; y++) {
  for (let x = 0; x < 50; x++) {
    table.rows[y].cells[x].onclick = function () {
  
    switch (table.rows[y].cells[x].textContent) {
      case '1': 
        colorCells('green', 1, 3, y, x);
      break;

      case '2':
        colorCells('blue', 2, 5, y, x);
      break;

      case '3':
        colorCells('red', 3, 7, y, x);
      break;
      }
  	}
  };
}

