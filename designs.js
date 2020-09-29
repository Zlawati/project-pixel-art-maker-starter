// Select color input
// Select size input


function makeGrid() {
  // for storing the height , width , canvas values
  const height = document.getElementById('#inputHeight').value;
  const width = docuemnt.getElementById('#inputWidth').value;
  const canvas = docuemnt.getElementById('#colorPicker').value;

  // using while loop to delete the rows
  while (canvas.rows.length > 0) {
    canvas.DeleteRow(0);
  }

  // using for loops to draw the rows and nesting for the cells
  for(let i = 0; i < height; i++) {
    let row = canvas.insertRow(i);

    for(let w = 0; w < width; w++) {
      let cell = row.insertCell(w);

      cell.addEventListener('click', function(evt){
        event.target.style.backgroundColor = document.getElementById("#colorPicker")
      });
    }
  }
}

docuemnt.getElementById('#sizePicker').addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid();
});
