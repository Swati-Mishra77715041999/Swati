function getData(row) {
  var cell = row.cells;
  document.getElementById("Name").value = cell[0].innerHTML;
  document.getElementById("Number").value = cell[1].innerHTML;
}
